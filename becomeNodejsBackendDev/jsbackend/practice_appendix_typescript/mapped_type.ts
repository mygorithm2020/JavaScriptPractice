// 맵드 타입

type Feature = {        // 기능을 표현한 타입
    event : string;
    coupon : string;
}

type FeaturePermission = {      // 해당 기능에 대한 권한을 표현한 타입
    event? : boolean;
    coupon? : boolean;
}


//  맵드 타입으로 변경
type FeaturePermission2 = { [key in keyof Feature]? : boolean};


const ddd : Feature = {event : "sdd", coupon : "sdsds"};

// 선택 가능 속성ㅇ으로 변경
type PartialFeature = Partial<Feature>;

// 읽기 전용으로 변경
type ReadonlyFeature = Readonly<Feature>;

