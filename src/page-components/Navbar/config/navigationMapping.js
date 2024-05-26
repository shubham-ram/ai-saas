import { IconMessages, IconPhoto, IconVideo, IconCode, IconSettings } from '@tabler/icons-react';

const NAVIGATION_TOP_MAPPING = [
    {
        key: "chat",
        title: "chat",
        href: "/chat",
        icon: <IconMessages />
    },
    {
        key: "image",
        title: "Image Generation",
        href: "/image",
        icon: <IconPhoto />
    },
    {
        key: "video",
        title: "Video Generation",
        href: "/video",
        icon: <IconVideo />
    },
    {
        key: "Code",
        title: "Code Generation",
        href: "/code",
        icon: <IconCode />
    },

];

const NAVIGATION_BOTTOM_MAPPING = [
    {
        key: "settings",
        title: "Settings",
        href: "/settings",
        icon: <IconSettings />
    }
]

export { NAVIGATION_TOP_MAPPING, NAVIGATION_BOTTOM_MAPPING }