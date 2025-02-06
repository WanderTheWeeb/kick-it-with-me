export interface Place {
    id?: number;
    place?: string;
    name: string;
    emoji: string;
    actividad?: string[];
    description?: string;
    imageUrl?: string;
}

// Array of places
export const places: Place[] = [
    {
        id: 1,
        place: "Las escolleras",
        name: "Las escolleras",
        description: "Un lugar bonito para pasar el rato. Sin olvidar la vista al mar y la brisa marina.",
        actividad: [
            "Esquites",
            "Tacos",
            "Alitas"
        ],
        imageUrl: "https://www.coatzacoalcos.gob.mx/wp-content/uploads/2021/09/IMG-20210901-WA0058-800x450.jpg",
        emoji: "🌊"
    },
    {
        id: 2,
        place: "Restaurante temático coreano",
        name: "Gangnam Tea & Grill",
        description: "Mira a tu alrededor y disfruta de la decoración temática coreana. Parece que hampton tiene algo que decir!!!.",
        actividad: [
            "Sushi"
        ],
        imageUrl: "https://blob.diariodelistmo.com/images/2024/07/10/sushi-focus-0-0-300-240.jpg",
        emoji: "🍣"
    },
    {
        id: 3,
        place: "Cinepolis Acaya",
        name: "Plaza Acaya",
        description: "Un clasico de Coatzacoalcos. Un lugar para disfrutar de una buena película y pasar un buen rato.",
        actividad: [
            "Comer",
            "Cine",
            "GoKarts",
            "Garra"
        ],
        imageUrl: "https://scontent.fvsa3-1.fna.fbcdn.net/v/t1.6435-9/47218754_1223653514440319_6018427226800783360_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEiHTo9B0CA_a99KFnEWowuf2i-7S-7YV9_aL7tL7thX1mbnRF8LgeGpHFTf-uKQ57yObGxbHU2q6pg7nJa6PcP&_nc_ohc=Fk6WEgWamyQQ7kNvgFfFrk0&_nc_oc=AdiNJ6FNGKkgPxW8ECAfQOweUEMn___M71GwymSwAkLlKFLnNWzZe3npYC7MnYBtgOsuyXE4P3PJMly-Mfaj_Ycg&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=Abs7EEzUFIMnRuj2MhqxEld&oh=00_AYDtiPM1zZica2OW2wXzM_cKnPKPt_OeQQ704DTYnEKL3A&oe=67CB13A8",
        emoji: "🎬"
    },
    {
        id: 4,
        place: "Plaza Forum",
        name: "Plaza Forum",
        description: "Un clasico de Coatzacoalcos. Un lugar para disfrutar de una buena película y dar un roll.",
        actividad: [
            "Comer",
            "Cafe",
            "Tiendas"
        ],
        imageUrl: "https://www.gicsa.com.mx:8281/images/librariesprovider11/centroscomerciales/coatzacoalcos/coatza32aa52385-afb6-4008-ab20-beb9095ad2c4.jpg?sfvrsn=281cc1e0_3",
        emoji: "🎬"
    },
    {
        id: 5,
        place: "Malecón Coatzacoalcos",
        name: "Piramide de Quetzalcoatl",
        description: "Un museo y una piramide en uno solo. ¿Qué mas se puede pedir?",
        actividad: [
            "Piramide",
            "Museo",
            "Playa"
        ],
        imageUrl: "https://www.coatzacoalcos.gob.mx/wp-content/uploads/2024/10/Piramide-montaje-muertos-800x488.jpg",
        emoji: "🏛️"
    }
]