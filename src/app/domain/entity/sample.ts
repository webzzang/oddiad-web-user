export class Sample {
    loungeSeq: number;
    seq: number;//스웨팅순번
    code: string;
    siteId: string;
    name: string;
    memo: string;
    description: string; //서비스설명
    imagePath: string;
    view: boolean;
    managerId: string;
    modifyDate: string;
    registerDate: string;
    menuList: Array<SampleMenu>;
}

export class SampleMenuOption {
    seq: number;
    menu_seq: number;
    name: string;
    view: boolean;
}

export class SampleMenu {
    seq: number;
    serviceSeq: number;
    menuType: any;
    menuTypeName: any;
    view: boolean;
    name: string;
    imagePhoto: string;
    price: number;
    residentPrice: number;
    memo: string;
    cup: Array<any>;
    addCup: Array<any>;
    addTemperature: Array<any>;
    temperature: Array<any>;
    option: Array<any>;
    options: Array<any>;
    cafeDefaultOption: Array<any>
    cafeMenuOption: Array<SampleMenuOption>
    registerDate: string;
    modifyDate: string;
    tempModifyIdx: number;
}
