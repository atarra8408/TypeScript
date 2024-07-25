
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Juan',
}

const passenger2: Passenger = {
  name: "Carolina",
  children: ['Fenanda', 'Celeste'],
};

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;    

    console.log(passenger.name, howManyChildren);
}

const printChildrenNumber = (passenger: Passenger):number => {
  
    if(!passenger.children) return 0;

    const howManyChildren = passenger.children!.length;

  console.log(passenger.name, howManyChildren);
};

printChildren(passenger1);
printChildrenNumber(passenger1);