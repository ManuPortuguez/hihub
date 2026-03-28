# Guía de Traducción - HiHub Global Website

## ✅ Sistema Instalado

Ya está instalado y configurado:
- ✅ i18next
- ✅ react-i18next  
- ✅ Archivo de configuración: `/src/i18n.ts`
- ✅ Integración con selector de idioma

## 🔧 Cómo Usar las Traducciones

### 1. En componentes React/TypeScript:

```typescript
import { useTranslation } from 'react-i18next';

function MiComponente() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </div>
  );
}
```

### 2. Ejemplo Real - Actualizar el Menú:

**Antes:**
```typescript
<Link to="/">Home</Link>
<Link to="/#services">Services</Link>
```

**Después:**
```typescript
import { useTranslation } from 'react-i18next';

function Menu() {
  const { t } = useTranslation();
  
  return (
    <>
      <Link to="/">{t('nav.home')}</Link>
      <Link to="/#services">{t('nav.services')}</Link>
    </>
  );
}
```

## 📝 Traducciones Disponibles

Todas las traducciones están en `/src/i18n.ts`:

### Navegación
- `nav.home` - Home / Inicio
- `nav.services` - Services / Servicios
- `nav.clients` - Clients / Clientes
- `nav.contact` - Contact / Contacto

### Hero Section
- `hero.title`
- `hero.subtitle`
- `hero.cta`

### About Section
- `about.subtitle`
- `about.title`
- `about.description1`
- `about.description2`
- `about.feature1`
- `about.feature2`

### Services Section
- `services.subtitle`
- `services.title`
- `services.service1.title`
- `services.service1.desc`
- (etc...)

## 🎯 Componentes que Necesitan Actualización

Para traducir completamente el sitio, actualiza estos archivos:

### 1. **Navegación** - `/src/components/headers/header-two/Menu.tsx`
```typescript
import { useTranslation } from 'react-i18next';

// En el componente:
const { t } = useTranslation();

// Reemplazar textos fijos por:
{t('nav.home')}
{t('nav.services')}
```

### 2. **Hero Section** - `/src/features/home-two/HeroSec2.tsx`
```typescript
const { t } = useTranslation();

<h1>{t('hero.title')}</h1>
<p>{t('hero.subtitle')}</p>
<button>{t('hero.cta')}</button>
```

### 3. **About Section** - `/src/features/home-two/AboutSec2.tsx`
```typescript
const { t } = useTranslation();

<span>{t('about.subtitle')}</span>
<h2>{t('about.title')}</h2>
<p>{t('about.description1')}</p>
```

### 4. **Services Section** - Archivo de servicios
```typescript
const { t } = useTranslation();

<h3>{t('services.service1.title')}</h3>
<p>{t('services.service1.desc')}</p>
```

## 🚀 Cómo Funciona

1. **Usuario cambia idioma** con el selector (🇺🇸/🇪🇸)
2. **LanguageSelect** llama a `i18n.changeLanguage(code)`
3. **Toda la página se actualiza** automáticamente
4. **Chat widget** también detecta el cambio

## 📦 Agregar Nuevas Traducciones

Edita `/src/i18n.ts`:

```typescript
const resources = {
  en: {
    translation: {
      "nueva.clave": "New text in English",
    }
  },
  es: {
    translation: {
      "nueva.clave": "Nuevo texto en español",
    }
  }
};
```

Luego úsala:
```typescript
{t('nueva.clave')}
```

## ✨ Estado Actual

- ✅ Sistema i18n instalado y configurado
- ✅ Selector de idioma integrado con i18n
- ✅ Chat widget sincronizado con idioma de página
- ✅ Banderas correctas (🇺🇸 🇪🇸)
- ⏳ **Pendiente**: Actualizar componentes para usar `t()`

## 🎬 Próximos Pasos

1. Identifica los componentes con texto estático
2. Importa `useTranslation` en cada componente
3. Reemplaza textos fijos por `{t('clave')}`
4. Prueba cambiando el idioma

¿Quieres que actualice algún componente específico como ejemplo?
