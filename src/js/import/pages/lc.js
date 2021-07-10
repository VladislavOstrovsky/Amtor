import $ from "jquery";
require('./basket');

// lc-menu add active link
const pathNameSplit = location.pathname.split("/");
let currentPage = pathNameSplit[pathNameSplit.length - 1];

if (currentPage.includes('empty')) {
   currentPage = currentPage.replace('-empty', '');
}

const activeLink = $(".lcm_wrapper_desktop").find(`[data-url-page="${currentPage}"]`);
activeLink.addClass('active');
