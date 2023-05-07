let random_num = 0
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1; index++) {
        random_num = randint(1, 6)
        basic.showNumber(random_num)
    }
})
basic.forever(function () {
	
})
