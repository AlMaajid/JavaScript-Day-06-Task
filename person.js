class Person {

  constructor(fn, ln, age, address, nat, lang, mail) {
    this.first_name = fn;
    this.las_name = ln;
    this.age = age;
    this.address = address;
    this.nationality = nat;
    this.lang = lang;
    this.mail = mail;
  }

}
class address {
  constructor(dn, street, pin) {
    this.door_no = dn;
    this.street = street;
    this.pincode = pin;
  }
}

let person1 = new Person("Majith", "Al Rasheeth", 23, new address("3980", "North", "600001"), "Indian", "Tamil", "abcdefg@gmail.com");
console.log(person1);