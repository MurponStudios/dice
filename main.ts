let random_num = 0
input.onGesture(Gesture.Shake, function () {
    random_num = randint(1, 6)
    basic.showNumber(random_num)
})
basic.forever(function () {
	
})
