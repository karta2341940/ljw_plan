import { defineStore } from "pinia";

export const barStore = defineStore("bardata",
    {
        state: () => ({
            data: [
                {
                    id: "00000000001",
                    status: true,
                    img: "/ok/ok1.jpg",
                    active: true
                },
                {
                    id: "00000000002",
                    status: false,
                    img: "/ng/ng1.jpg",
                    active: false
                },
                {
                    id: "00000000003",
                    status: true,
                    img: "/ok/ok2.jpg",
                    active: false
                },
                {
                    id: "00000000004",
                    status: true,
                    img: "/ok/ok3.jpg",
                    active: false
                },
                {
                    id: "00000000005",
                    status: true,
                    img: "/ok/ok4.jpg",
                    active: false
                },
                {
                    id: "00000000006",
                    status: true,
                    img: "/ok/ok5.jpg",
                    active: false
                },
                {
                    id: "00000000007",
                    status: false,
                    img: "/ng/ng2.jpg",
                    active: false
                },
                {
                    id: "00000000008",
                    status: true,
                    img: "/ok/ok6.jpg",
                    active: false
                },
                {
                    id: "00000000009",
                    status: true,
                    img: "/ok/ok7.jpg",
                    active: false
                },
                {
                    id: "00000000010",
                    status: true,
                    img: "/ok/ok8.jpg",
                    active: false
                },
                {
                    id: "00000000011",
                    status: true,
                    img: "/ok/ok9.jpg",
                    active: false
                },
                {
                    id: "00000000012",
                    status: false,
                    img: "/ng/ng3.jpg",
                    active: false
                },
                {
                    id: "00000000013",
                    status: true,
                    img: "/ok/okA.jpg",
                    active: false
                },
                {
                    id: "00000000014",
                    status: false,
                    img: "/ng/ng5.jpg",
                    active: false
                },
                {
                    id: "00000000015",
                    status: true,
                    img: "/ok/ok1.jpg",
                    active: false
                },
                {
                    id: "00000000016",
                    status: true,
                    img: "/ok/ok1.jpg",
                    active: false
                },
                {
                    id: "00000000017",
                    status: false,
                    img: "/ng/ng4.jpg",
                    active: false
                },
                {
                    id: "00000000018",
                    status: true,
                    img: "/ok/ok1.jpg",
                    active: false
                },
            ]
        })
    })