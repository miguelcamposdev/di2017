"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var TabsComponent = (function () {
    function TabsComponent() {
        /* ***********************************************************
        * Use the constructor to inject app services that will be needed for
        * the whole tab navigation layout as a whole.
        *************************************************************/
    }
    TabsComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the whole tab
        * navigation layout as a whole.
        *************************************************************/
    };
    Object.defineProperty(TabsComponent.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            if (this._title !== value) {
                this._title = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * The "getIconSource" function returns the correct tab icon source
    * depending on whether the app is ran on Android or iOS.
    * You can find all resources in /App_Resources/os
    *************************************************************/
    TabsComponent.prototype.getIconSource = function (icon) {
        return platform_1.isAndroid ? "" : "res://tabIcons/" + icon;
    };
    /* ***********************************************************
    * Get the current tab view title and set it as an ActionBar title.
    * Learn more about the onSelectedIndexChanged event here:
    * https://docs.nativescript.org/cookbook/ui/tab-view#using-selectedindexchanged-event-from-xml
    *************************************************************/
    TabsComponent.prototype.onSelectedIndexChanged = function (args) {
        var tabView = args.object;
        var selectedTabViewItem = tabView.items[args.newIndex];
        this.title = selectedTabViewItem.title;
    };
    TabsComponent = __decorate([
        core_1.Component({
            selector: "TabsComponent",
            moduleId: module.id,
            templateUrl: "./tabs.component.html",
            styleUrls: ["./tabs.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxQ0FBcUM7QUFTckM7SUFJSTtRQUNJOzs7c0VBRzhEO0lBQ2xFLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0k7OztzRUFHOEQ7SUFDbEUsQ0FBQztJQUVELHNCQUFJLGdDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxLQUFhO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUM7OztPQU5BO0lBUUQ7Ozs7a0VBSThEO0lBQzlELHFDQUFhLEdBQWIsVUFBYyxJQUFZO1FBQ3RCLE1BQU0sQ0FBQyxvQkFBUyxHQUFHLEVBQUUsR0FBRyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7O2tFQUk4RDtJQUM5RCw4Q0FBc0IsR0FBdEIsVUFBdUIsSUFBbUM7UUFDdEQsSUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDO0lBQzNDLENBQUM7SUEvQ1EsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzs7T0FDVyxhQUFhLENBZ0R6QjtJQUFELG9CQUFDO0NBQUEsQUFoREQsSUFnREM7QUFoRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBUYWJWaWV3LCBUYWJWaWV3SXRlbSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlRhYnNDb21wb25lbnRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGFicy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi90YWJzLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIF90aXRsZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3QgYXBwIHNlcnZpY2VzIHRoYXQgd2lsbCBiZSBuZWVkZWQgZm9yXG4gICAgICAgICogdGhlIHdob2xlIHRhYiBuYXZpZ2F0aW9uIGxheW91dCBhcyBhIHdob2xlLlxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgd2hvbGUgdGFiXG4gICAgICAgICogbmF2aWdhdGlvbiBsYXlvdXQgYXMgYSB3aG9sZS5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl90aXRsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVGhlIFwiZ2V0SWNvblNvdXJjZVwiIGZ1bmN0aW9uIHJldHVybnMgdGhlIGNvcnJlY3QgdGFiIGljb24gc291cmNlXG4gICAgKiBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgYXBwIGlzIHJhbiBvbiBBbmRyb2lkIG9yIGlPUy5cbiAgICAqIFlvdSBjYW4gZmluZCBhbGwgcmVzb3VyY2VzIGluIC9BcHBfUmVzb3VyY2VzL29zXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBnZXRJY29uU291cmNlKGljb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBpc0FuZHJvaWQgPyBcIlwiIDogXCJyZXM6Ly90YWJJY29ucy9cIiArIGljb247XG4gICAgfVxuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIEdldCB0aGUgY3VycmVudCB0YWIgdmlldyB0aXRsZSBhbmQgc2V0IGl0IGFzIGFuIEFjdGlvbkJhciB0aXRsZS5cbiAgICAqIExlYXJuIG1vcmUgYWJvdXQgdGhlIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQgZXZlbnQgaGVyZTpcbiAgICAqIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2Nvb2tib29rL3VpL3RhYi12aWV3I3VzaW5nLXNlbGVjdGVkaW5kZXhjaGFuZ2VkLWV2ZW50LWZyb20teG1sXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IHRhYlZpZXcgPSA8VGFiVmlldz5hcmdzLm9iamVjdDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUYWJWaWV3SXRlbSA9IHRhYlZpZXcuaXRlbXNbYXJncy5uZXdJbmRleF07XG5cbiAgICAgICAgdGhpcy50aXRsZSA9IHNlbGVjdGVkVGFiVmlld0l0ZW0udGl0bGU7XG4gICAgfVxufVxuIl19