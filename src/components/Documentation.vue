<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card">
                <h1>Current Version</h1>
                <p>Vue 2.6.10 and PrimeVue 1.0.0-beta.3</p>

                <h1>Overview</h1>
                <p>PrimeVue Designer API is SASS based theme engine for creating PrimeVue themes easily.</p>

                <h1>Designer Application</h1>
                <p>This demo application is created to test your components while designing your theme. It is based on vue-cli so to run it locally 
                    extract the contents of the designer zip file and run the following commands.</p>
<pre>
npm install
npm run serve
</pre>

                <p>Then navigate to <b>http://localhost:8080</b> to access the application in your local environment, now it is time to create your own theme.</p>

                <h1>Live Editor</h1>
                <p>Live Editor allows editing the theme within the demo application to view the changes instantly. Click the gear icon on the right side of the screen to display a code editor, change the variables and then click the update button to view 
                    your changes.
                </p>

                <h1>Create Your Own Theme</h1>
                <p>While live editor is a great to way for rapid prototyping, it is suggested to use the module loader approach below so that you can save and maintain the theme.
                    A built-in base theme named "mytheme" is available to get started with your own theme using 500+ variables. To begin with
                    navigate to the <b>src/assets/mytheme/</b> folder that includes the following artifacts;
                </p>

                <ul>
                    <li><b>/fonts</b> Folder of the font files</li>
                    <li><b>_fonts.scss</b>: Definition of the @font-face of the theme</li>
                    <li><b>_variables.scss</b>: List of variables to create your own theme</li>
                    <li><b>_extensions.scss</b>: Customizations to the theme</li>
                    <li><b>theme.scss</b>: Main theme file that imports the scss files required for the theme</li>
                </ul>

                <p>You may now start designing your own theme by changing the variables, for example change the $primaryColor variable and save the _variables.scss file. Your new theme will be generated 
                    and browser will refresh the application automatically. Use the components menu at the sidebar to view your theme.
                </p>

                <h1>Full List of SASS Variables</h1>
                <p>A wide range of variables are available to customize different aspects of the components such as colors, margins and paddings.</p>

<div style="height:400px; overflow: auto">
<pre>
//main color scheme
$primaryColor:#007ad9;
$primaryDarkColor:#116fbf;
$primaryDarkerColor:#005b9f;
$primaryTextColor:#ffffff;

//Global
$fontFamily:"Open Sans","Helvetica Neue",sans-serif;
$fontSize:14px;
$textColor:#333333;
$textSecondaryColor:#848484;
$borderRadius:3px;
$transitionDuration:.2s;
$primeIconFontSize:1.25em;

//anchors
$linkColor:$primaryColor;
$linkHoverColor:$primaryDarkColor;
$linkActiveColor:$primaryDarkerColor;

//highlight
$highlightBgColor:$primaryColor;
$highlightColorText:$primaryTextColor;

//input field (e.g. inputtext, spinner, inputmask)
$inputPadding:0.429em;
$inputBgColor:#ffffff;
$inputBorder:1px solid #a6a6a6;
$inputHoverBorderColor:#212121;
$inputFocusBorderColor:$primaryColor;
$inputFocusShadow:none;
$inputErrorBorder:1px solid #a80000;
$inputPlaceholderTextColor:#666666;
$inputTransition:border-color $transitionDuration;

//input groups
$inputGroupBorderColor:#a6a6a6;
$inputGroupBgColor:#eaeaea;
$inputGroupTextColor:$textSecondaryColor;

//input lists (e.g. dropdown, autocomplete, multiselect, orderlist)
$inputListMinWidth:12em;
$inputListBgColor:#ffffff;
$inputListPadding:0;
$inputListItemPadding:0.429em 0.857em;
$inputListItemBgColor:transparent;
$inputListItemTextColor:#333333;
$inputListItemHoverBgColor:#eaeaea;
$inputListItemHoverTextColor:#333333;
$inputListItemHighlightBgColor:$highlightBgColor;
$inputListItemHighlightTextColor:$highlightColorText;
$inputListItemBorder:0 none;
$inputListItemMargin:0;
$inputListItemDividerColor:#d8dae2;
$inputListHeaderPaddingTop:0.429em;
$inputListHeaderPaddingLeft:0.857em;
$inputListHeaderPaddingRight:0.857em;
$inputListHeaderPaddingBottom:0.429em;
$inputListHeaderMargin:0;
$inputListHeaderBgColor:#ffffff;
$inputListHeaderTextColor:$textColor;
$inputListHeaderBorder:1px solid #eaeaea;
$inputListHeaderSearchIconColor:$primaryColor;
$inputListHeaderCloseIconColor:$textSecondaryColor;
$inputListHeaderCloseIconHoverColor:$textColor;
$inputListHeaderCloseIconTransition:box-shadow $transitionDuration;

//inputs with panels (e.g. password)
$inputContentPanelPadding:12px;
$inputContentPanelBgColor:#ffffff;
$inputContentPanelTextColor:$textColor;

//static positioned input lists like listbox
$inputListBorder:1px solid #a6a6a6;

//inputs with overlays (e.g. autocomplete, dropdown, multiselect)
$inputOverlayBorder:1px solid #c8c8c8;
$inputOverlayShadow:0 3px 6px 0 rgba(0, 0, 0, 0.16);

//input dropdowns (e.g. multiselect, dropdown)
$inputDropdownIconColor:$textSecondaryColor;

//button
$buttonTextOnlyPadding:0.429em 1em;
$buttonWithLeftIconPadding:0.429em 1em 0.429em 2.25em;
$buttonWithRightIconPadding:0.429em 2.25em 0.429em 1em;
$buttonIconOnlyPadding:0.429em;
$buttonIconOnlyWidth:2.357em;
$buttonBgColor:$primaryColor;
$buttonBorder:1px solid $primaryColor;
$buttonTextColor:$primaryTextColor;
$buttonHoverBgColor:$primaryDarkColor;
$buttonHoverTextColor:$primaryTextColor;
$buttonHoverBorderColor:$primaryDarkColor;
$buttonActiveBgColor:$primaryDarkerColor;
$buttonActiveTextColor:$primaryTextColor;
$buttonActiveBorderColor:$primaryDarkerColor;
$buttonFocusBorderColor:$primaryDarkerColor;
$buttonFocusOutline:0 none;
$buttonFocusOutlineOffset:0px;
$buttonFocusShadow:0 0 0 0.2em lighten($primaryColor, 35%);
$buttonTransition:background-color $transitionDuration,box-shadow $transitionDuration;
$raisedButtonShadow:0 2px 3px 0 rgba(0, 0, 0, 0.15);
$roundedButtonBorderRadius:15px;

$secondaryButtonBgColor:#f4f4f4;
$secondaryButtonBorder:1px solid #f4f4f4;
$secondaryButtonTextColor:#333333;
$secondaryButtonHoverBgColor:#c8c8c8;
$secondaryButtonHoverTextColor:#333333;
$secondaryButtonHoverBorderColor:#c8c8c8;
$secondaryButtonActiveBgColor:#a0a0a0;
$secondaryButtonActiveTextColor:#333333;
$secondaryButtonActiveBorderColor:#a0a0a0;
$secondaryButtonFocusShadow:0 0 0 0.2em lighten($primaryColor, 35%);

$infoButtonBgColor:#007ad9;
$infoButtonBorder:1px solid #007ad9;
$infoButtonTextColor:#ffffff;
$infoButtonHoverBgColor:#116fbf;
$infoButtonHoverTextColor:#ffffff;
$infoButtonHoverBorderColor:#116fbf;
$infoButtonActiveBgColor:#005b9f;
$infoButtonActiveTextColor:#ffffff;
$infoButtonActiveBorderColor:#005b9f;
$infoButtonFocusShadow:0 0 0 0.2em lighten($infoButtonBgColor, 35%);

$successButtonBgColor:#34A835;
$successButtonBorder:1px solid #34A835;
$successButtonTextColor:#ffffff;
$successButtonHoverBgColor:#107D11;
$successButtonHoverTextColor:#ffffff;
$successButtonHoverBorderColor:#107D11;
$successButtonActiveBgColor:#0C6B0D;
$successButtonActiveTextColor:#ffffff;
$successButtonActiveBorderColor:#0C6B0D;
$successButtonFocusShadow:0 0 0 0.2em lighten($successButtonBgColor, 35%);

$warningButtonBgColor:#ffba01;
$warningButtonBorder:1px solid #ffba01;
$warningButtonTextColor:#333333;
$warningButtonHoverBgColor:#ED990B;
$warningButtonHoverTextColor:#333333;
$warningButtonHoverBorderColor:#ED990B;
$warningButtonActiveBgColor:#D38B10;
$warningButtonActiveTextColor:#333333;
$warningButtonActiveBorderColor:#D38B10;
$warningButtonFocusShadow:0 0 0 0.2em lighten($warningButtonBgColor, 35%);

$dangerButtonBgColor:#e91224;
$dangerButtonBorder:1px solid #e91224;
$dangerButtonTextColor:#ffffff;
$dangerButtonHoverBgColor:#c01120;
$dangerButtonHoverTextColor:#ffffff;
$dangerButtonHoverBorderColor:#c01120;
$dangerButtonActiveBgColor:#a90000;
$dangerButtonActiveTextColor:#ffffff;
$dangerButtonActiveBorderColor:#a90000;
$dangerButtonActiveBorderColor:#a90000;
$dangerButtonFocusShadow:0 0 0 0.2em lighten($dangerButtonBgColor, 35%);

//checkbox
$checkboxWidth:20px;
$checkboxHeight:20px;
$checkboxActiveBorderColor:$primaryColor;
$checkboxActiveBgColor:$primaryColor;
$checkboxActiveTextColor:$primaryTextColor;
$checkboxActiveHoverBgColor:$primaryDarkerColor;
$checkboxActiveHoverTextColor:$primaryTextColor;
$checkboxActiveHoverBorderColor:$primaryDarkerColor;
$checkboxActiveFocusBgColor:$primaryDarkerColor;
$checkboxActiveFocusTextColor:$primaryTextColor;
$checkboxActiveFocusBorderColor:$primaryDarkerColor;
$checkboxFocusBgColor:$inputBgColor;
$checkboxFocusTextColor:$primaryColor;
$checkboxFocusBorderColor:$primaryColor;
$checkboxTransition:background-color $transitionDuration, border-color $transitionDuration;

//radiobutton
$radiobuttonWidth:20px;
$radiobuttonHeight:20px;
$radiobuttonActiveBorderColor:$primaryColor;
$radiobuttonActiveBgColor:$primaryColor;
$radiobuttonActiveTextColor:$primaryTextColor;
$radiobuttonActiveHoverBgColor:$primaryDarkerColor;
$radiobuttonActiveHoverTextColor:$primaryTextColor;
$radiobuttonActiveHoverBorderColor:$primaryDarkerColor;
$radiobuttonActiveFocusBgColor:$primaryDarkerColor;
$radiobuttonActiveFocusTextColor:$primaryTextColor;
$radiobuttonActiveFocusBorderColor:$primaryDarkerColor;
$radiobuttonFocusBgColor:$inputBgColor;
$radiobuttonFocusTextColor:$primaryColor;
$radiobuttonFocusBorderColor:$primaryColor;
$radiobuttonTransition:background-color $transitionDuration, border-color $transitionDuration;

//togglebutton
$toggleButtonBgColor:#dadada;
$toggleButtonBorder:1px solid #dadada;
$toggleButtonTextColor:#333333;
$toggleButtonIconColor:#666666;
$toggleButtonHoverBgColor:#c8c8c8;
$toggleButtonHoverBorderColor:#c8c8c8;
$toggleButtonHoverTextColor:#333333;
$toggleButtonHoverIconColor:#212121;
$toggleButtonActiveBgColor:$primaryColor;
$toggleButtonActiveBorderColor:$primaryColor;
$toggleButtonActiveTextColor:$primaryTextColor;
$toggleButtonActiveIconColor:$primaryTextColor;
$toggleButtonActiveHoverBgColor:$primaryDarkColor;
$toggleButtonActiveHoverBorderColor:$primaryDarkColor;
$toggleButtonActiveHoverTextColor:$primaryTextColor;
$toggleButtonActiveHoverIconColor:$primaryTextColor;
$toggleButtonFocusOutline:0 none;
$toggleButtonFocusBgColor:#c8c8c8;
$toggleButtonFocusBorderColor:#c8c8c8;
$toggleButtonFocusTextColor:#333333;
$toggleButtonFocusIconColor:#212121;
$toggleButtonActiveFocusBgColor:$primaryDarkerColor;
$toggleButtonActiveFocusBorderColor:$primaryDarkerColor;
$toggleButtonActiveFocusTextColor:$primaryTextColor;
$toggleButtonActiveFocusIconColor:$primaryTextColor;

//inplace
$inplacePadding:$inputPadding;
$inplaceHoverBgColor:#eaeaea;
$inplaceHoverTextColor:$textColor;
$inplaceTransition:background-color $transitionDuration;

//rating
$ratingTransition:color $transitionDuration, box-shadow $transitionDuration;
$ratingCancelIconColor:#e4018d;
$ratingCancelHoverIconColor:#b5019f;
$ratingIconFontSize:20px;
$ratingStarIconColor:$textColor;
$ratingStarIconHoverColor:$primaryColor;

//slider
$sliderBgColor:#c8c8c8;
$sliderBorder:0 none;
$sliderHeight:.286em;
$sliderWidth:0.286em;
$sliderHandleWidth:1.143em;
$sliderHandleHeight:1.143em;
$sliderHandleBgColor:#ffffff;
$sliderHandleBorder:2px solid #666666;
$sliderHandleBorderRadius:100%;
$sliderHandleHoverBorder:2px solid $primaryColor;
$sliderHandleHoverBgColor:2px solid #666666; 
$sliderHandleTransition:border-color $transitionDuration;
$sliderRangeBgColor:$primaryColor;

//calendar
$calendarWidth:20em;
$calendarNavIconColor:#a6a6a6;
$calendarNavIconHoverColor:$primaryColor;
$calendarNavIconTransition:color $transitionDuration, box-shadow $transitionDuration;
$calendarPadding:0.857em;
$calendarTableMargin:0.857em 0 0 0;
$calendarHeaderCellPadding:.5em;
$calendarCellDatePadding:.5em;
$calendarCellDateHoverBgColor:#eaeaea;
$calendarCellDateBorderRadius:$borderRadius;
$calendarCellDateSelectedBgColor:$primaryColor;
$calendarCellDateSelectedTextColor:$primaryTextColor;
$calendarCellDateTodayBgColor:#d0d0d0;
$calendarCellDateTodayTextColor:$textColor;
$calendarTimePickerDivider: 1px solid #d8dae2;
$calendarTimePickerPadding:0.857em;
$calendarTimePickerIconColor:$textColor;
$calendarTimePickerIconFontSize:1.286em;
$calendarTimePickerTimeFontSize:1.286em;
$calendarTimePickerIconHoverColor:$primaryColor;
$calendarButtonBarDivider: 1px solid #d8dae2;
$calendarMultipleMonthDivider: 1px solid #d8dae2;

//spinner
$spinnerButtonWidth:2em;

//input switch
$inputSwitchWidth:3em;
$inputSwitchHeight:1.75em;
$inputSwitchBorderRadius:30px;
$inputSwitchTransition:background-color $transitionDuration;
$inputSwitchSliderOffBgColor:#cccccc;
$inputSwitchHandleOffBgColor:#ffffff;
$inputSwitchSliderOffHoverBgColor:#b7b7b7;
$inputSwitchSliderOffFocusBgColor:#b7b7b7;
$inputSwitchSliderOnBgColor:$primaryColor;
$inputSwitchSliderOnHoverBgColor:$primaryDarkColor;
$inputSwitchHandleOnBgColor:#cccccc;
$inputSwitchSliderOnFocusBgColor:$primaryDarkerColor;

//panel common (e.g. accordion, panel, tabview)
$panelHeaderBorder:1px solid #c8c8c8;
$panelHeaderBgColor:#f4f4f4;
$panelHeaderTextColor:#333333;
$panelHeaderIconColor:#848484;
$panelHeaderIconHoverColor:#333333;
$panelHeaderIconTransition:color $transitionDuration, box-shadow $transitionDuration;
$panelHeaderFontWeight:700;
$panelHeaderPadding:0.571em 1em;
$panelContentBorder:1px solid #c8c8c8;
$panelContentBgColor:#ffffff;
$panelContentTextColor:$textColor;
$panelContentPadding:0.571em 1em;
$panelFooterBorder:1px solid #c8c8c8;
$panelFooterBgColor:#ffffff;
$panelFooterTextColor:$textColor;
$panelFooterPadding:0.571em 1em;
$panelHeaderHoverBgColor:#dbdbdb;
$panelHeaderHoverBorder:1px solid #dbdbdb;
$panelHeaderHoverTextColor:#333333;
$panelHeaderHoverIconColor:#333333;
$panelHeaderActiveBgColor:$primaryColor;
$panelHeaderActiveBorder:1px solid $primaryColor;
$panelHeaderActiveTextColor:#ffffff;
$panelHeaderActiveIconColor:#ffffff;
$panelHeaderActiveHoverBgColor:$primaryDarkerColor;
$panelHeaderActiveHoverBorder:1px solid $primaryDarkerColor;
$panelHeaderActiveHoverTextColor:#ffffff;
$panelHeaderActiveHoverIconColor:#ffffff;
$panelHeaderTransition:background-color $transitionDuration, box-shadow $transitionDuration;

//accordion
$accordionSpacing:2px;

//tabview
$tabsNavBorder:1px solid #c8c8c8;
$tabsNavBgColor:transparent;
$tabHeaderSpacing: 2px;

//scrollpanel
$scrollPanelHandleBgColor:#dadada;
$scrollPanelTrackBorder:0 none;
$scrollPanelTrackBgColor:#f8f8f8;

//card
$cardShadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);

//paginator
$paginatorBgColor:#f4f4f4;
$paginatorBorder:1px solid #c8c8c8;
$paginatorPadding:0;
$paginatorIconColor:$textSecondaryColor;
$paginatorElementWidth:2.286em;
$paginatorElementHeight:2.286em;
$paginatorElementHoverBgColor:#e0e0e0;
$paginatorElementHoverIconColor:#333333;
$paginatorElementBorderRadius:0;
$paginatorElementMargin:0;
$paginatorElementPadding:0;
$paginatorElementBorder:0 none;

//table
$tableHeaderCellPadding:0.571em 0.857em;
$tableHeaderCellBgColor:#f4f4f4;
$tableHeaderCellTextColor:$textColor;
$tableHeaderCellFontWeight:700;
$tableHeaderCellBorder:1px solid #c8c8c8;
$tableHeaderCellHoverBgColor:#e0e0e0;
$tableHeaderCellHoverTextColor:#333333;
$tableHeaderCellIconColor:$textSecondaryColor;
$tableHeaderCellHoverIconColor:#333333;
$tableBodyRowBgColor:#ffffff;
$tableBodyRowTextColor:$textColor;
$tableBodyRowEvenBgColor:#f9f9f9;
$tableBodyRowHoverBgColor:#eaeaea;
$tableBodyRowHoverTextColor:#333333;
$tableBodyCellBorder:1px solid #c8c8c8;
$tableBodyCellPadding:0.429em 0.857em;
$tableFooterCellPadding:0.571em 0.857em;
$tableFooterCellBgColor:#f4f4f4;
$tableFooterCellTextColor:$textColor;
$tableFooterCellFontWeight:700;
$tableFooterCellBorder:1px solid #c8c8c8;
$tableResizerHelperBgColor:$primaryColor;

//schedule
$scheduleEventBgColor:$primaryDarkColor;
$scheduleEventBorder:1px solid $primaryDarkColor;
$scheduleEventTextColor:$primaryTextColor;

//tree
$treeContainerPadding:0.286em;
$treeNodePadding:0.143em 0;
$treeNodeLabelPadding:0.286em 0;
$treeNodeContentSpacing:0.286em;

//lightbox
$lightBoxNavIconFontSize:3em;
$lightBoxNavIconColor:#ffffff;

//org chart
$organizationChartConnectorColor:#c8c8c8;

//messages
$messagesMargin:1em 0;
$messagesPadding:1em;
$messagesIconFontSize:2em;
$messageCloseIconFontSize:1.5em;

//message
$messagePadding:.429em;
$messageMargin: 0;
$messageIconFontSize: 1.25em;
$messageTextFontSize: 1em;

//toast
$toastShadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
$toastMessageMargin:0 0 1em 0;

//severities
$infoMessageBgColor:#7fbcec;
$infoMessageBorder:0 none;
$infoMessageTextColor:#212121;
$infoMessageIconColor:#212121;
$successMessageBgColor:#b7d8b7;
$successMessageBorder:0 none;
$successMessageTextColor:#212121;
$successMessageIconColor:#212121;
$warnMessageBgColor:#ffe399;
$warnMessageBorder:0 none;
$warnMessageTextColor:#212121;
$warnMessageIconColor:#212121;
$errorMessageBgColor:#f8b7bd;
$errorMessageBorder:0 none;
$errorMessageTextColor:#212121;
$errorMessageIconColor:#212121;

//growl
$growlTopLocation:70px;
$growlIconFontSize:2.571em;
$growlMessageTextMargin: 0 0 0 4em;
$growlMargin:0 0 1em 0;
$growlPadding:1em;
$growlShadow:0 3px 6px 0 rgba(0, 0, 0, 0.16);
$growlOpacity:.9;

//overlays
$overlayContentBorder:1px solid #c8c8c8;
$overlayContainerShadow:0 0 6px 0 rgba(0, 0, 0, 0.16);

//dialog
$dialogHeaderPadding:1em;
$dialogContentPadding:1em;
$confirmDialogPadding:1.5em;

//overlay panel
$overlayPanelCloseIconBgColor:$primaryColor;
$overlayPanelCloseIconColor:#ffffff;
$overlayPanelCloseIconHoverBgColor:$primaryDarkerColor;
$overlayPanelCloseIconHoverColor:#ffffff;

//tooltip
$tooltipBgColor:#333333;
$tooltipTextColor:#ffffff;
$tooltipPadding:$inputPadding;

//steps
$stepsItemBgColor:#ffffff;
$stepsItemBorder:1px solid #c8c8c8;
$stepsItemNumberColor:$textColor;
$stepsItemTextColor:$textSecondaryColor;
$stepsItemWidth:28px;
$stepsItemHeight:28px;

//progressbar
$progressBarHeight:24px;
$progressBarBorder:0 none;
$progressBarBgColor:#eaeaea;
$progressBarValueBgColor:$primaryColor;

//menu (e.g. menu, menubar, tieredmenu)
$menuBgColor:#ffffff;
$menuBorder:1px solid #c8c8c8;
$menuPadding:0;
$menuTextColor:$textColor;
$menuitemPadding:0.714em 0.857em;
$menuitemMargin:0;
$menuitemTextColor:#333333;
$menuitemIconColor:#333333;
$menuitemHoverTextColor:#333333;
$menuitemHoverIconColor:#333333;
$menuitemHoverBgColor:#eaeaea;
$menuitemActiveTextColor:#333333;
$menuitemActiveIconColor:#333333;
$menuitemActiveBgColor:#eaeaea;
$submenuHeaderMargin: 0;
$submenuPadding: 0;
$overlayMenuBorder:1px solid #c8c8c8;
$overlayMenuShadow:0 0px 6px 0 rgba(0, 0, 0, 0.16);

//misc
$maskBgColor:rgba(0, 0, 0, 0.4);        //dialog mask
$inlineSpacing:.5em;                      //spacing between inline elements
$chipsItemMargin:0 .286em 0 0;            //autocomplete and chips token spacing
$dataIconColor:$textSecondaryColor;       //icon color of a data such as treetoggler, table expander
$dataIconHoverColor:$textColor;           //hover icon color of a data such as treetoggler, table expander

//general
$disabledOpacity:.5;                      //opacity of a disabled item

`}
</pre>
</div>

                <h1>Customization</h1>
                <p>Designer API is located inside the <b>src/assets/designer</b> folder and an actual theme imports the main _core.scss from the designer folder.
                    In case you need to make structural changes to the design system, add these changes to the _extensions.scss files instead of editing the .scss files inside the designer folder to 
                    avoid any maintenance issues. Designer is updated periodically for improvements and updating is done by replacing the designer folder only. For seamless updates, never edit
                    the designer folder as <b>src/assets/mytheme/_extensions.scss</b> file is created for this purpose.
                </p>

                <h1>Example Themes Family</h1>
                <p>PrimeVue ships with the CSS of Nova, Luna and Rhea themes. SCSS structure and variables of these themes are also available inside the src/assets folder
                    in case you'd like to customize them or see how these themes are built.
                </p>

                <h1>Font Family</h1>
                <p>Default font of the designer is "Open Sans" and it can be changed in three steps.</p>
                <ul>
                    <li>Placing the font artifacts such as eot, woff files inside the fonts.</li>
                    <li>Define the font-face at _fonts.scss.</li>
                    <li>Change the $fontFamily at _variables.scss.</li>
                </ul>

                <p>Following example uses Roboto font for the theme.</p>

                <i>_fonts.scss</i>

<pre>
@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url('../fonts/roboto-v18-latin-300.eot'); /* IE9 Compat Modes */
    src: local('Roboto Light'), local('Roboto-Light'),
        url('../fonts/roboto-v18-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/roboto-v18-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/roboto-v18-latin-300.woff') format('woff'), /* Modern Browsers */
        url('../fonts/roboto-v18-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/roboto-v18-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/roboto-v18-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Roboto'), local('Roboto-Regular'),
        url('../fonts/roboto-v18-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/roboto-v18-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/roboto-v18-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../fonts/roboto-v18-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/roboto-v18-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url('../fonts/roboto-v18-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Roboto Bold'), local('Roboto-Bold'),
        url('../fonts/roboto-v18-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/roboto-v18-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/roboto-v18-latin-700.woff') format('woff'), /* Modern Browsers */
        url('../fonts/roboto-v18-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/roboto-v18-latin-700.svg#Roboto') format('svg'); /* Legacy iOS */
}
</pre>

                <i>_variables.scss</i>
<pre>
$fontFamily:"Roboto","Helvetica Neue",sans-serif;
</pre>

                <h1>Theme Size</h1>
                <p>Component sizes including the font-sizes, margins and paddings are defined using em units which allows changing the overall size, as a result changing the $fontSize variable
                    is enough to scale the components. Default is 14px and example below creates a bigger theme based on a scale of 16px.</p>
<pre>
$fontSize:16px;
</pre>

                <h1>Build</h1>
                <p>Once the theme is ready for use, you need to build the CSS with the command below and import the theme.css to your application. There are many ways to import theme.css in a Vue application, 
                    for example you may just use a link tag or if you are using webpack with css loader integrated, you may just import it like a regular javascript module.
                </p>
<pre>
sass --update src/assets/mytheme:src/assets/mytheme
</pre>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
pre {
    border-left: 10px solid #7fbcec;
    background: #f0f0f0;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    text-align: left;
    white-space: pre;
    padding: 1em;
}
</style>