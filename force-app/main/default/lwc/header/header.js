import { LightningElement } from 'lwc';
import isGuest from "@salesforce/user/isGuest";
import basePath from "@salesforce/community/basePath";
export default class Header extends LightningElement {
get isGuest() {
        return isGuest;
    }
onLogoutClick() {
const sitePrefix = basePath.replace(/\/s$/i, ""); // site prefix is the site base path without the trailing "/s"
 var url = sitePrefix + "/secur/logout.jsp";
window.open(url,'_self');
}


}