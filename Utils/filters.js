//Filters out data for last N days based on a key of object
const lastNDaysLevelData = (data, nestingKey, nestingIndex, validationKey, days) => {
    return  data.filter(item => {
        if (item[nestingKey] && item[nestingKey].length) {
            const element = item[nestingKey][nestingIndex];
            return (new Date() - new Date(element[validationKey])) <= days * 24 * 60 * 60 * 1000; // days in milliseconds
        }
    });
};

//Filters out data for last N days based on a key of object
const lastNDaysData = (data, key, days) => {
    return data.filter(item => {
        return (new Date() - new Date(item[key])) <= days * 24 * 60 * 60 * 1000; // days in milliseconds
    });
};

const getSortedObject = (obj, sortKey, prop) => {
    let keyValueArray = Object.entries(obj);
    const finalArr = [];

    // Sort Obj based on sortKey
    keyValueArray.sort((a, b) => b[1][sortKey] - a[1][sortKey]);

    // Create final array of objects with the prop
    keyValueArray.forEach(([key, value]) => {
        finalArr.push({ [prop]: key, ...value });
    });

    return finalArr;
};

const getTimestamp = (level, index) => {
    return level.userInteractions[index] ? level.userInteractions[index].timeStamp : null;
};

const getCountHashmap = (arr, key, keyMap) => {
    let hashmap = {};
    arr.forEach(data => {
        if (hashmap[data[key]]) {
            hashmap[data[key]].count += 1;
        } else {
            hashmap[data[key]] = { count: 1 };
            const map = Object.keys(keyMap);
            for (let i = 0; i < map.length; i++) {
                hashmap[data[key]][map[i]] = data[keyMap[map[i]]];
            }
        }
    });
    return hashmap;
};
//This function returns a hashmap with message and it's counts for the given
// action. It also links associated level names and level session ids.
const getCountForAction = (arr, action) => {
    let hashmap = {};
    arr.forEach(level => {
        const userInteractions = level.userInteractions;
        userInteractions.forEach(interaction => {
            if (interaction.action === action) {
                const msg = interaction.msg;
                const levelName = level.levelName;
                const levelSessionId = level._id;
                if (hashmap[msg]) {
                    hashmap[msg].count += 1;
                    hashmap[msg].levelNames.push(levelName);
                    hashmap[msg].levelNames = [... new Set(hashmap[msg].levelNames)];
                    hashmap[msg].levelSessionIds.push(levelSessionId);
                    hashmap[msg].levelSessionIds = [... new Set(hashmap[msg].levelSessionIds)];
                } else {
                    hashmap[msg] = { count: 1 };
                    hashmap[msg].levelNames = [levelName];
                    hashmap[msg].levelSessionIds = [levelSessionId];
                }
            }
        });
    });
    return hashmap;
};

const getLevelTimeHashmap = (arr, key, keyMap) => {
    let levelTimehashmap = {};
    arr.forEach(level => {
        const lastInteraction = level.userInteractions.length - 1;
        const start = getTimestamp(level, 0);
        const end = getTimestamp(level, lastInteraction);
        const diff = new Date(end).getTime() - new Date(start).getTime();
        if (levelTimehashmap[level[key]]) {
            levelTimehashmap[level[key]].timeDiff = Math.max(diff, levelTimehashmap[level[key]].timeDiff);
            if (diff > levelTimehashmap[level[key]].timeDiff) {
                levelTimehashmap[level[key]].levelSessionId = level._id;
            }
        } else {
            levelTimehashmap[level[key]] = { timeDiff: diff };
            const map = Object.keys(keyMap);
            for (let i = 0; i < map.length; i++) {
                levelTimehashmap[level[key]][map[i]] = level[keyMap[map[i]]];
            }
        }
    });
    return levelTimehashmap;
};
const getTopResults = (arr, topCount) => {
    return arr.length >= topCount ? arr.slice(0, topCount)
        : arr.slice(0, arr.length);
};

module.exports = { lastNDaysData, lastNDaysLevelData, getTopResults, getSortedObject, getCountHashmap, getCountForAction, getLevelTimeHashmap };
