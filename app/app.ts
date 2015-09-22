/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import UserProfile from 'UserProfile';

// Annotation section
@Component(
	{
		selector: 'my-app'
	}
)
@View(
	{
		template: '<h1>Hello {{ user.firstName }} {{ user.lastName }}.  How are you.</h1>'
	}
)

	// Component controller
class MyApplication
{
	user:UserProfile;

	constructor()
	{
		var user = this.user = new UserProfile();

		user.firstName = 'Bob';
		user.lastName = 'Johnson';
	}
}

bootstrap(MyApplication);
