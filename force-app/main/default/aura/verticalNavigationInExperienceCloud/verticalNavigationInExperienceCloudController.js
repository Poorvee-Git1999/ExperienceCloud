({

   onClick : function(component, event, helper) {

       var id = event.target.dataset.menuItemId;

       if (id) {

           component.getSuper().navigate(id);

        }

  	},


    menuItemHandler: function (component, event, helper) {

		let menuItems = component.get("v.menuItems");

		console.log('menuItems',menuItems);

	},


    profileToggleCollapse: function (component, event, helper) {

		var currentProfileIcon = component.get("v.profileIconCurrPosition");

        var currentProfileCollapseClass = component.get("v.profileCollapseClass");


        if (currentProfileCollapseClass === 'collapse') {

            currentProfileCollapseClass = 'expand';

            currentProfileIcon = 'utility:chevronup';

        } else {

            currentProfileCollapseClass = 'collapse';

            currentProfileIcon = 'utility:chevrondown';

        }

 

        // Set the updated values back to the attributes

        component.set("v.profileIconCurrPosition", currentProfileIcon);

        component.set("v.profileCollapseClass", currentProfileCollapseClass);

	},

})