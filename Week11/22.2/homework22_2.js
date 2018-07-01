class MobilePhone {
	constructor(call, SMS) {
		this._call = call;
		this._SMS = SMS;
	}

	PhoneCall() {
		console.log(`Calling to ${this._call}`);
	}

	SMS() {
		console.log(`Sent a message to ${this._message}`);
	}

	InternetSurfing() {
		console.log(`Playing facebook`);
	}
}

class Samsung extends MobilePhone {
	constructor(call, SMS) {
		super(call, SMS);
	}

	UseGearVR() {
		console.log(`Using Gear VR`);
	}

	TransformToPC() {
		console.log(`I am transformer`);
	}

	GooglePlay() {
		console.log(`What does an app are you looking for?`);
	}
}

class Apple extends MobilePhone {
	constructor(call, SMS) {
		super(call, SMS);
	}

	AppStore() {
		console.log(`I can play a game better than Android.`);
	}
}

class Samsung_Galaxy_Note_8 extends Samsung {
	constructor(call, SMS) {
		super(call, SMS);
	}

	UsePen() {
		console.log(`Better than Apple pencil`);
	}
}

class Samsung_Galaxy_S8 extends Samsung {
	constructor(call, SMS) {
		super(call, SMS);
	}
}

class iPhoneX extends Apple {
	constructor(call, SMS) {
		super(call, SMS);
	}

	FaceID() {
		console.log(`That's your face, I do not recognize.`);
	}

}

class iPhone8 extends Apple {
	constructor(call, SMS) {
		super(call, SMS);
	}

	TouchID() {
		console.log("That's your fingerprint, I will send to NSA.")
	}
}
