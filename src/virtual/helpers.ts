import { User } from "discord.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../services/firebase";
import VirtualUser from "./models/virtualUser";

export const getVirtualUser = async (discordUser: User): Promise<VirtualUser | any> => {
    const userRef = doc(firestore, "users", discordUser.id);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) return createVirtualUser(discordUser);

    const userData = userSnap.data() as VirtualUser;
    return new VirtualUser(
        userData.id,
        userData.name,
        userData.hp,
        userData.power,
        userData.isBusy,
        userData.money,
        userData.cooldowns,
        userData.items,
        userData.weapon,
        userData.armor
    );
};

export const createVirtualUser = async (discordUser: User): Promise<VirtualUser | any> => {
    const newUser = new VirtualUser(discordUser.id, discordUser.username, 100, 5);

    await newUser.update();

    return newUser;
};
