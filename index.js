let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.src = './assets/rizzo.jpg'
dogContent.append(dogImage)
content.append(dogContent)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let Descript =document.createElement('h3')
Descript.append('Description:')
dogDetails.append(Descript)

let gentleDog = document.createElement('p')
gentleDog.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')
Descript.append(gentleDog)


let feedingTimes = document.createElement('h3')
feedingTimes.append('Feeding Times:')
dogDetails.append(feedingTimes)

let Times = document.createElement('ul')
dogDetails.append(Times)

let Time1 = document.createElement('li')
let Time2 = document.createElement('li')
let Time3 = document.createElement('li')
Time1.append('9:00 am')
Time2.append('12:00 pm')
Time3.append('5:00 pm')

Times.append(Time1,Time2,Time3)




