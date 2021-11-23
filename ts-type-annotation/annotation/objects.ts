const profile = {
  name: 'Mike',
  age: 20,
  coords: {
    lat: 30,
    lng: 50
  },
  setAge(age: number): void {
    this.age = age
  }
}

// const { age }: { age: number } = profile;
const {
  coords: { lat, lng } 
}: { coords: { lat: number, lng: number } } = profile;

const { age, name }: { age: number; name: string } = profile;