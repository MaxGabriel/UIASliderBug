
var target = UIATarget.localTarget();

target.delay(3);

target.frontMostApp().mainWindow().sliders()["aSlider"].dragToValue(0.81);

target.delay(2);

target.frontMostApp().mainWindow().sliders()["aSlider"].dragToValue(0.5);

target.delay(2);

target.frontMostApp().mainWindow().sliders()["aSlider"].dragToValue(0.9);

target.delay(2);

target.frontMostApp().mainWindow().sliders()["aSlider"].dragToValue(0.5);

target.delay(2);

target.frontMostApp().mainWindow().sliders()["aSlider"].dragToValue(1);
