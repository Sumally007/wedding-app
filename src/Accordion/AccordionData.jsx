import { CiMobile2, CiCamera } from "react-icons/ci";
import { LuBanknote, LuTvMinimalPlay, LuPartyPopper } from "react-icons/lu";
import { FiUserX } from "react-icons/fi";

export const AccordionData = [
    {
        id: 1,
        title: "Do guests need to download an app?",
        content: "No. Guests simply scan the QR code and use their phone browser. There is nothing to install.",
        icon: CiMobile2
    },
    {
        id: 2,
        title: "Where does the gift money go?",
        content: "The money is sent directly to the organizer’s temporary lipa number through mobile money. Y-Ya never holds your funds.",
        icon: LuBanknote
    },
    {
        id: 3,
        title: "Can guests upload photos and videos?",
        content: "Yes. Y-Ya can collect guest moments depending on the package selected for the event — Moments Only or Both.",
        icon: CiCamera
    },
    {
        id: 4,
        title: "Can the MC see contributions live?",
        content: "Yes. Contributions can be shown on a live MC feed during the event, making shoutouts easy and keeping the energy high.",
        icon: LuTvMinimalPlay
    },
    {
        id: 5,
        title: "Can guests give anonymously?",
        content: "Yes. The flow supports anonymous contributions for guests who prefer not to have public shoutouts.",
        icon: FiUserX
    },
    {
        id: 6,
        title: "Is Y-Ya only for weddings?",
        content: "Not at all. It works for send-offs, fundraisers, birthdays, baby showers, graduations, and other celebrations.",
        icon: LuPartyPopper
    }
]