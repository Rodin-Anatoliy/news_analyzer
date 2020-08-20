export class DataStorage {
    constructor(itemName) {
        this.itemName = itemName;
    }

    saveData(data) {
        localStorage.removeItem(this.itemName);
        localStorage.setItem(this.itemName, JSON.stringify(data));
    }



    getData() {
        return JSON.parse(localStorage.getItem(this.itemName));
    }
}