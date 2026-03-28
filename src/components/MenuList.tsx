import { useEffect, useState, useMemo, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectContext from '@/components/context/ProjectContext';
import { menuData, type MenuItem } from "@/data/menuData";

export default function MenuList() {
    const { t } = useTranslation();
    const location = useLocation();
    const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

    const context = useContext(ProjectContext);
    if (!context) throw new Error("Context Null");
    const { setIsMobile } = context;

    useEffect(() => {
        setIsMobile(false);
    }, [location.pathname, setIsMobile]);

    // Calculate current paths based on location using useMemo
    const currentPaths = useMemo(() => {
        const currentPath = location.pathname;
        const paths = new Set<string>();

        const checkActive = (item: MenuItem) => {
            let isActive = false;

            // Check own path
            if (item.path && (currentPath === item.path || currentPath.startsWith(item.path + '/'))) {
                isActive = true;
            }

            // Check matchPaths
            if (item.matchPaths) {
                if (item.matchPaths.some(p => currentPath === p || currentPath.startsWith(p + '/'))) {
                    isActive = true;
                }
            }

            // Check children
            if (item.children) {
                item.children.forEach(child => {
                    if (checkActive(child)) {
                        isActive = true;
                    }
                });
            }

            if (isActive) {
                paths.add(item.key);
            }
            return isActive;
        };

        menuData.forEach(checkActive);
        return paths;
    }, [location.pathname]);

    // Handle dropdown toggle
    const handleDropdownToggle = (e: React.MouseEvent<HTMLAnchorElement>, dropdownKey: string) => {
        e.preventDefault();
        setOpenDropdowns(prev => {
            const newSet = new Set(prev);
            if (newSet.has(dropdownKey)) {
                newSet.delete(dropdownKey);
            } else {
                // Find if this is a submenu and who its parent is
                let parentKey: string | null = null;
                const findParent = (items: MenuItem[], targetKey: string, currentParentKey: string | null = null): boolean => {
                    for (const item of items) {
                        if (item.key === targetKey) {
                            parentKey = currentParentKey;
                            return true;
                        }
                        if (item.children && findParent(item.children, targetKey, item.key)) {
                            return true;
                        }
                    }
                    return false;
                };

                findParent(menuData, dropdownKey);

                if (parentKey) {
                    // It's a submenu. Keep parent, and clear other submenus under the same parent
                    const findItem = (items: MenuItem[], key: string): MenuItem | null => {
                        for (const item of items) {
                            if (item.key === key) return item;
                            if (item.children) {
                                const found = findItem(item.children, key);
                                if (found) return found;
                            }
                        }
                        return null;
                    };

                    const parentItem = findItem(menuData, parentKey);

                    if (parentItem && parentItem.children) {
                        parentItem.children.forEach(child => {
                            if (child.key !== dropdownKey) {
                                newSet.delete(child.key);
                            }
                        });
                    }
                } else {
                    // It's a top-level menu. Clear EVERYTHING else.
                    newSet.clear();
                }
                newSet.add(dropdownKey);
            }
            return newSet;
        });
    };

    const isActive = (key: string) => currentPaths.has(key);
    const isOpen = (key: string) => openDropdowns.has(key);

    const getTranslatedLabel = (key: string, fallback: string) => {
        const translationKey = `nav.${key}`;
        const translated = t(translationKey);
        return translated !== translationKey ? translated : fallback;
    };

    const renderMenuItem = (item: MenuItem, isSubmenu = false) => {
        if (item.isHeader) {
            return <li key={item.key} className="dropdown-header">{getTranslatedLabel(item.key, item.label)}</li>;
        }

        const hasChildren = item.children && item.children.length > 0;
        const active = isActive(item.key);
        const open = isOpen(item.key);

        if (hasChildren) {
            if (isSubmenu) {
                // Nested submenu (e.g. Team, Shop, Blog Details)
                return (
                    <li key={item.key} className={`dropdown-submenu dropend ${active ? 'current' : ''} ${open ? 'show' : ''}`}>
                        <Link
                            to="#"
                            className="dropdown-item dropdown-toggle"
                            onClick={(e) => handleDropdownToggle(e, item.key)}
                            aria-expanded={open}
                        >
                            {getTranslatedLabel(item.key, item.label)}
                        </Link>
                        <ul className={`dropdown-menu ${open ? 'show' : ''}`}>
                            {item.children?.map(child => renderMenuItem(child, true))}
                        </ul>
                    </li>
                );
            } else {
                // Top-level dropdown
                return (
                    <li key={item.key} className={`nav-item dropdown ${active ? 'current' : ''} ${open ? 'show' : ''}`}>
                        <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            role="button"
                            onClick={(e) => handleDropdownToggle(e, item.key)}
                            aria-expanded={open}
                        >
                            {getTranslatedLabel(item.key, item.label)}
                        </Link>
                        <ul className={`dropdown-menu ${open ? 'show' : ''}`}>
                            {item.children?.map(child => renderMenuItem(child, true))}
                        </ul>
                    </li>
                );
            }
        }

        // Regular link
        return (
            <li key={item.key} className={`${isSubmenu ? '' : 'nav-item'} ${active ? 'current' : ''}`}>
                <Link to={item.path || "#"} className={isSubmenu ? 'dropdown-item' : 'nav-link'}>
                    {getTranslatedLabel(item.key, item.label)}
                    {item.badge && <span className="badge bg-dark ms-2">{item.badge}</span>}
                </Link>
            </li>
        );
    };

    return (
        <ul className="navbar-nav mx-auto align-items-lg-center">
            {menuData.map(item => renderMenuItem(item))}
        </ul>
    );
}