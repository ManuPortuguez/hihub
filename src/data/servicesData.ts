// Import all necessary images
import Modal from '@/images/modal.svg';
import Logistic from '@/images/logistic.svg';
import ServS1 from '@/images/logis.jpg';
import ServS2 from '@/images/road.jpg';
import ServS3 from '@/images/air.jpg';
import ServS4 from '@/images/rail.jpg';
import ServS5 from '@/images/Warehousing.jpg';
import ServS6 from '@/images/logis.jpg';
import Bus from '@/images/icons/bus.png';
import BusGear from '@/images/icons/bus-gear.png';
import PlaneLg from '@/images/icons/plane-lg.png';
import Road from '@/images/icons/road.png';
import Serv1 from '@/images/icons/serv1.png';
import Serv12 from '@/images/serv1.png';
import Serv2 from '@/images/icons/serv2.png';
import Serv22 from '@/images/serv2.png';
import Serv3 from '@/images/icons/serv3.png';
import Serv32 from '@/images/serv3.png';
import Serv4 from '@/images/icons/serv4.png';
import Serv42 from '@/images/serv4.png';

// Type definitions
export interface ServiceCardType1 {
    id: number;
    title: string;
    description: string;
    backgroundImage: string;
    icon: string;
    link: string;
    delay: string;
}

export interface ServiceCardType2 {
    id: number;
    title: string;
    description: string;
    thumbnailImage: string;
    icon: string;
    link: string;
}

// Data for Services component (service-card2)
export const servicesData: ServiceCardType1[] = [
    {
        id: 1,
        title: 'International Transport',
        description: 'At TransHub, we revoluti cargo services,log prioritizing precision, efficiency, antransport worldwide connectivity',
        backgroundImage: ServS1,
        icon: Bus,
        link: '/single-service',
        delay: '.2'
    },
    {
        id: 2,
        title: 'Local Truck Transport',
        description: 'At TransHub, we revoluti cargo services,log prioritizing precision, efficiency, antransport worldwide connectivity',
        backgroundImage: ServS2,
        icon: BusGear,
        link: '/single-service',
        delay: '.4'
    },
    {
        id: 3,
        title: "Local Truck Transport",
        description:
            "Identify and evaluate suppliers to source goods and materials. We negotiate prices and terms to ensure the best deals for clients.", 
        backgroundImage: ServS3,
        icon: PlaneLg,
        link: '/single-service',
        delay: '.6'
    },
    {
        id: 4,
        title: 'Rail Personal Delivery',
        description: 'At TransHub, we revoluti cargo services,log prioritizing precision, efficiency, antransport worldwide connectivity',
        backgroundImage: ServS4,
        icon: Road,
        link: '/single-service',
        delay: '.2'
    },
    {
        id: 5,
        title: "Skyline Express",
        description:
            "Full factory quality checks and inspections on production before shipment. We ensure compliance with safety and quality standards.",
        backgroundImage: ServS5,
        icon: Modal,
        link: '/single-service',
        delay: '.4'
    },
    {
        id: 6,
        title: 'E-commerce Logistics',
        description: 'At TransHub, we revoluti cargo services,log prioritizing precision, efficiency, antransport worldwide connectivity',
        backgroundImage: ServS6,
        icon: Logistic,
        link: '/single-service',
        delay: '.6'
    }
];

// Data for Services2 component (service-card)
export const services2Data: ServiceCardType2[] = [
    {
        id: 1,
        title: 'Abastecimiento y Adquisiciones',
        description: 'Conectando tu negocio con el corazón de la manufactura e innovación china.',
        thumbnailImage: Serv12,
        icon: Serv1,
        link: '/single-service'
    },
    {
        id: 2,
        title: 'Control de Calidad e Inspección',
        description: 'Conectando tu negocio con el corazón de la manufactura e innovación china.',
        thumbnailImage: Serv22,
        icon: Serv2,
        link: '/single-service'
    },
    {
        id: 3,
        title: "Fast Personal Delivery",
        description:
            "Full management and logistics of goods from factory to clients' warehouses. Handles customs documentation for international shipments.",
        thumbnailImage: Serv32,
        icon: Serv3,
        link: '/single-service'
    },
    {
        id: 4,
        title: 'Servicios de Consultoría',
        description: 'Conectando tu negocio con el corazón de la manufactura e innovación china.',
        thumbnailImage: Serv42,
        icon: Serv4,
        link: '/single-service'
    },
    {
        id: 5,
        title: 'Ferias Internacionales',
        description: 'Conectando tu negocio con el corazón de la manufactura e innovación china.',
        thumbnailImage: Serv12,
        icon: Serv1,
        link: '/single-service'
    },
    {
        id: 6,
        title: 'Servicios de TI',
        description: 'Conectando tu negocio con el corazón de la manufactura e innovación china.',
        thumbnailImage: Serv22,
        icon: Serv2,
        link: '/single-service'
    }
];