import { TbVideo, TbMessages, TbSettings, TbPhoto, TbCode } from "react-icons/tb";

const NAVIGATION_TOP_MAPPING = [
    {
        key: "chat",
        title: "chat",
        href: "/chat",
        icon: <TbMessages />
    },
    {
        key: "image",
        title: "Image Generation",
        href: "/image",
        icon: <TbPhoto />
    },
    {
        key: "video",
        title: "Video Generation",
        href: "/video",
        icon: <TbVideo />
    },
    {
        key: "Code",
        title: "Code Generation",
        href: "/code",
        icon: <TbCode />
    },

];

const NAVIGATION_BOTTOM_MAPPING = [
    {
        key: "settings",
        title: "Settings",
        href: "/settings",
        icon: <TbSettings />
    }
]

export { NAVIGATION_TOP_MAPPING, NAVIGATION_BOTTOM_MAPPING }