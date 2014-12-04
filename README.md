GettyChopper v1.0
============

A quick jquery code to use and abuse Getty Images.

INTRO TO THE NEED:
In March of 2014 Getty Images, one of the best distributers of high-end photography changed the way they dealt with users who wanted to embed their photos into web projects. They created the simple embed code generator for each of their images that can be used free of charge on any web project. The embed code includes with it a simple and elegant watermark at the bottom of the page along with links back to the image on their gettyimage.com site. It also includes the ability for users to share the image on social media.

OUTCOME OF USE:
GettyChopper is a simple JQuery file that once included in your site will automatically hide all of the watermarks and social options from any Getty Image. It will make the photo appear to visitors to be a simple jpg with no other outside stylings.

DISABLING THE SOCIAL SHARING:
GettyChopper achieves this by disabling the mouse hover event which would normally show the social media sharing options by adding a pointer-events of none to the parent div that the embed code is wrapped in. This way the mouse does not drop through the div into the iframe.

DISABLING THE LINK BACK AND CREDIT:
GettyChopper hides the link back and Getty Image credit by simply gathering the height of the iframe the image is embedded in, subtracting 29px (The height of the watermark) and applying the new height to the parent Div that the embed code includes to wrap the iframe in and enforces an overflow of hidden.

HOW TO USE:
Simply download the license and jquery code, upload to your webserver of choice and include the code in the head or footer of any page and GettyChopper does the rest by targeting the embed codes default div class of "Getty".

WARNING:
The use of this code CLEARLY violates the EULA of Getty Images' embed option. It will also undoubtedly be viewed as theft of the image and/or piracy for reusing the image without the appropriate watermark or permission. An argument could be made since the code for the watermark is still there but simply not visible to the site's visitor you technically "Have included the watermark", but I am NOT A lawyer and you assume all responsibility for using this code. GOOD LUCK!

WHY:
As with most codes of this nature GettyChopper was created for the sake of the advancement of coding education. It is not intended to be used in real world sites or products and should only be viewed and used with the intent to progress the future of coding and the advancement of web technologies.
