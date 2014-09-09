/**
 * @license Videogular v0.5.1 http://videogular.com
 * Two Fucking Developers http://twofuckingdevelopers.com
 * License: MIT
 */
"use strict";
angular.module("com.2fdevs.videogular.plugins.overlayplay", [])
	.directive(
	"vgOverlayPlay",
	["VG_STATES", function (VG_STATES) {
		return {
			restrict: "E",
			require: "^videogular",
			scope: {
				vgPlayIcon: "="
			},
			template: "<div class='overlayPlayContainer'>" +
				"<div class='iconButton' ng-class='overlayPlayIcon'></div>" +
				"</div>",
			link: function (scope, elem, attr, API) {
				function onComplete(target, params) {
					scope.overlayPlayIcon = {play: true};
				}

				function onClickOverlayPlay(event) {
					API.playPause();
					scope.$apply();
				}

				function onPlay(target, params) {
					scope.overlayPlayIcon = {};
				}

				function onChangeState(newState) {
					switch (newState) {
						case VG_STATES.PLAY:
							scope.overlayPlayIcon = {};
							break;

						case VG_STATES.PAUSE:
							scope.overlayPlayIcon = {play: true};
							break;

						case VG_STATES.STOP:
							scope.overlayPlayIcon = {play: true};
							break;
					}
				}

				elem.bind("click", onClickOverlayPlay);
				scope.overlayPlayIcon = {play: true};

				scope.$watch(
					function () {
						return API.currentState;
					},
					function (newVal, oldVal) {
						if (newVal != oldVal) {
							onChangeState(newVal);
						}
					}
				);
			}
		}
	}
	]);

