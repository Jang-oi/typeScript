type Name = string | number

let 이름 : Name = '123';

// 파라미터로는 number 가 들어와야되고 return 도 number 로 해야함.
function haha(x : number) : number {
    return x * 2;
}

// Member 라는 type 은 name 이란 키에 string 으로 가져야함.
type Member = {
    name : string
}

// Member2 라는 type 은 모든 object 속성이 string 이여야함.
type Member2 = {
    [key : string] : string
}

let john : Member2 = { name : 'kim', age : '123'};



