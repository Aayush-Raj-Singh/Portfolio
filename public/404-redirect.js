const locationParts = window.location.pathname.split("/");
const basePath = locationParts.slice(0, 2).join("/");
const remainingPath = locationParts.slice(2).join("/");
const destination = `${basePath}/?/${remainingPath}${window.location.search}${window.location.hash}`;

window.location.replace(destination);
