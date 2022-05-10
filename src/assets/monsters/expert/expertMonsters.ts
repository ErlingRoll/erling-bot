import Monster from "virtual/models/monster";

import humanoiddog from "./humanoiddog";
import sexrobot from "./sexrobot";

export const expertMonsters: { [id: string]: Monster | any } = {
    humanoiddog,
    sexrobot,
};
