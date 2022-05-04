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
        userData.isBusy,
        userData.hp,
        userData.money,
        userData.cooldowns,
        userData.items,
        userData.weapon,
        userData.armor
    );
};

export const createVirtualUser = async (discordUser: User): Promise<VirtualUser | any> => {
    const newUser = new VirtualUser(discordUser.id, discordUser.username);

    await setDoc(doc(firestore, "users", newUser.id), {
        id: newUser.id,
        name: newUser.name,
        hp: newUser.hp,
        money: newUser.money,
    });

    return newUser;
};
