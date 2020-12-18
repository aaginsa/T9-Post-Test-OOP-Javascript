function Person(name, nik, bod) {
  return {
        name: name,
        nik: nik,
        birthOfDate: bod,
        getWeekType: () => {
          var day = new Date(bod).getDay()
          if (day > 0 && day < 6) {
            return "Weekday" 
          } else if(day === 0 || day === 6) {
            return "Weekend"      
          } else {
            return "Birth of date not valid"  
          }
        },
        getAge: () => {
          var birthOfDate = Date.parse(bod)
          var now = Date.now()
          var diff = now - birthOfDate
          var diffDate = new Date(diff)
          return Math.abs(diffDate.getUTCFullYear() - 1970)
        }
    }
  }

  function Age(name, nik, bod) {
    var person = new Person(name, nik, bod)
    return {
      personByAge: () => {
        if(person.getAge() < 20) {
          return "Generasi Z"
        } else if (person.getAge() >= 20 || person.getAge() < 30) {
          return "Milenial Muda"
        } else if (person.getAge() >= 30 || person.getAge() < 40) {
          return "Milenial Tua"
        } else {
          return "Baby Boomer"
        }
      }
    }
  }
  
  var person1 = new Person('Tata', '6403052010930001', '1993-10-20');
  if (person1.getWeekType() === 'Weekday' || person1.getWeekType() === 'Weekend') {
    console.log(`${person1.name} lahir pada tipe minggu ${person1.getWeekType()}`)
  } else {
    console.log(`Tanggal lahir ${person1.name} bermasalah`)  
  }
  console.log(`Saat ini berumur ${person1.getAge()}`)

// ======

  var age1 = new Age('Tata', '6403052010930001', '1993-10-20');
  console.log(`Merupakan seorang ${age1.personByAge()}`)