---
id: mp_doc3
title:  Project Directory Structure
sidebar_label: Project Directory Structure
---

```
.
├── README.md
├── config
│   ├── env.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── modules.js
│   ├── paths.js
│   ├── pnpTs.js
│   ├── webpack.config.js
│   └── webpackDevServer.config.js
├── fileStructure.txt
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── images
│   │   ├── Farmer.png
│   │   ├── brinjal.png
│   │   ├── chat
│   │   │   ├── attachment.jpg
│   │   │   ├── download.jpg
│   │   │   └── send.png
│   │   ├── collectionprogress
│   │   │   └── arrowLeft.png
│   │   ├── crossicon.png
│   │   ├── crosswithsquare.png
│   │   ├── dashboard
│   │   │   ├── filter.svg
│   │   │   ├── hand.svg
│   │   │   ├── map-pin.svg
│   │   │   ├── pinky-promise.svg
│   │   │   ├── reset.svg
│   │   │   ├── rupee-indian.svg
│   │   │   ├── user.svg
│   │   │   └── users.svg
│   │   ├── disputes
│   │   │   ├── closed.png
│   │   │   ├── new.png
│   │   │   ├── ongoing.png
│   │   │   └── xcircle.png
│   │   ├── editgroup.png
│   │   ├── fieldexecutive
│   │   │   ├── cash.svg
│   │   │   ├── cheque.svg
│   │   │   ├── demanddraft.svg
│   │   │   ├── person1.jpeg
│   │   │   ├── person2.jpeg
│   │   │   ├── person3.jpeg
│   │   │   └── person4.jpeg
│   │   ├── filter.png
│   │   ├── left.png
│   │   ├── location.png
│   │   ├── notallowed.png
│   │   ├── onion.png
│   │   ├── pencil.png
│   │   ├── plus.png
│   │   ├── potato.png
│   │   ├── right.png
│   │   ├── sidenav
│   │   │   ├── auctionmanagement.png
│   │   │   ├── controlpanel.png
│   │   │   ├── dashboard.png
│   │   │   ├── farmermanagement.png
│   │   │   ├── filled
│   │   │   │   ├── auctionmanagement.png
│   │   │   │   ├── controlpanel.png
│   │   │   │   ├── dashboard.png
│   │   │   │   ├── farmermanagement.png
│   │   │   │   ├── forecastmanagement.png
│   │   │   │   ├── manageteams.png
│   │   │   │   ├── masterdatamapping.png
│   │   │   │   ├── myreports.png
│   │   │   │   ├── rolemapping.png
│   │   │   │   ├── seetings.png
│   │   │   │   ├── settings.png
│   │   │   │   ├── shortfallmanagement.png
│   │   │   │   └── vendormanagement.png
│   │   │   ├── forecastmanagement.png
│   │   │   ├── logout.png
│   │   │   ├── manageteams.png
│   │   │   ├── myreports.png
│   │   │   ├── rolemapping.png
│   │   │   ├── settings.png
│   │   │   ├── shortfallmanagement.png
│   │   │   ├── vendormanagement.png
│   │   │   └── waycool.png
│   │   ├── table
│   │   │   ├── download.svg
│   │   │   ├── filter.svg
│   │   │   ├── search.svg
│   │   │   └── send.svg
│   │   ├── tomato.png
│   │   ├── tomatoes.png
│   │   ├── upload.png
│   │   ├── user.jpg
│   │   ├── user.png
│   │   ├── userplaceholder.png
│   │   ├── userplaceholder2.png
│   │   ├── whitecrossicon.png
│   │   └── whiteediticon.png
│   └── index.html
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
└── src
    ├── Components
    │   ├── App.js
    │   ├── Assets
    │   │   └── Data
    │   │       └── TableData.js
    │   ├── Common
    │   │   ├── CheckboxLogic.js
    │   │   ├── Format.js
    │   │   ├── Header
    │   │   │   ├── Header.js
    │   │   │   └── Header.scss
    │   │   ├── Helpers.js
    │   │   ├── PaginationLogic.js
    │   │   ├── Sidebar
    │   │   │   ├── Sidebar.js
    │   │   │   └── Sidebar.scss
    │   │   ├── TextCapitalize.js
    │   │   ├── ToasterCreator.js
    │   │   ├── createUniqueName.js
    │   │   ├── handleSidebar.js
    │   │   └── styledComponents.js
    │   ├── Constant
    │   │   └── Tabs.js
    │   ├── Screens
    │   │   ├── AccessDenied.js
    │   │   ├── AuctionManagement
    │   │   │   ├── AuctionManagement.js
    │   │   │   ├── AuctionManagement.scss
    │   │   │   └── ViewLiveAuction
    │   │   │       ├── FarmersNotParticipatingTable.js
    │   │   │       ├── FarmersParticipatingTable.js
    │   │   │       └── ViewDetailsTable.js
    │   │   ├── Auth.js
    │   │   ├── BasicLayout.js
    │   │   ├── ControlPanel
    │   │   │   ├── ControlPanel.js
    │   │   │   ├── ControlPanel.scss
    │   │   │   └── ViewLiveAuction
    │   │   │       ├── Farmers.js
    │   │   │       ├── FarmersParticipatingTable.js
    │   │   │       └── ViewDetailsTable.js
    │   │   ├── Dashboard
    │   │   │   ├── Dashboard.js
    │   │   │   └── Dashboard.scss
    │   │   ├── FarmerManagement
    │   │   │   ├── FarmerManagement.js
    │   │   │   ├── FarmerManagement.scss
    │   │   │   ├── Table.js
    │   │   │   └── Table.scss
    │   │   ├── FarmersVendors
    │   │   │   ├── FarmersVendors.js
    │   │   │   └── FarmersVendors.scss
    │   │   ├── ForecastManagement
    │   │   │   ├── ForecastManagement.js
    │   │   │   ├── ForecastManagement.scss
    │   │   │   └── Table.js
    │   │   ├── ManageTeams
    │   │   │   ├── ManageTeams.js
    │   │   │   ├── ManageTeams.scss
    │   │   │   └── ViewLiveAuction
    │   │   │       ├── Farmers.js
    │   │   │       ├── FarmersParticipatingTable.js
    │   │   │       └── ViewDetailsTable.js
    │   │   ├── MyReports
    │   │   │   ├── MyReports.js
    │   │   │   └── MyReports.scss
    │   │   ├── RoleMapping
    │   │   │   ├── RoleMapping.js
    │   │   │   └── RoleMapping.scss
    │   │   ├── Settings
    │   │   │   ├── Settings.js
    │   │   │   └── Settings.scss
    │   │   ├── ShortfallManagement
    │   │   │   ├── ShortfallManagement.js
    │   │   │   ├── ShortfallManagement.scss
    │   │   │   ├── Table.js
    │   │   │   └── Table.scss
    │   │   ├── VendorManagement
    │   │   │   ├── Table.js
    │   │   │   ├── Table.scss
    │   │   │   ├── VendorManagement.js
    │   │   │   └── VendorManagement.scss
    │   │   └── namespace.txt
    │   ├── Services
    │   │   ├── Api.js
    │   │   └── History.js
    │   ├── StateManagement
    │   │   ├── Context.js
    │   │   └── Reducers
    │   │       ├── AutoSuggest.js
    │   │       ├── General.js
    │   │       ├── Route.js
    │   │       └── Table.js
    │   └── Utils
    │       ├── AcceptBtn
    │       │   └── AcceptBtn.js
    │       ├── AutoSuggest
    │       │   ├── AutoSuggest.js
    │       │   └── AutoSuggest.scss
    │       ├── BulkAction
    │       │   ├── BulkAction.js
    │       │   └── BulkAction.scss
    │       ├── Calender
    │       │   ├── Calender.js
    │       │   └── Calender.scss
    │       ├── CheckBox
    │       │   ├── CheckBox.js
    │       │   └── CheckBox.scss
    │       ├── CrossButton.js
    │       ├── Dashboard
    │       │   ├── AutoMultiSelect.js
    │       │   ├── AutoMultiSelect.scss
    │       │   ├── BarGraph.js
    │       │   ├── BarGraph.scss
    │       │   ├── BarGraphPopup.js
    │       │   ├── BarGraphPopup.scss
    │       │   ├── Cards.js
    │       │   ├── Cards.scss
    │       │   ├── CustomerOutstandingTable.js
    │       │   ├── CustomerOutstandingTable.scss
    │       │   ├── FilterBox.js
    │       │   ├── FilterBox.scss
    │       │   ├── FilterTagsDisplay.js
    │       │   ├── FilterTagsDisplay.scss
    │       │   ├── FromToDateRange.js
    │       │   ├── FromToDateRange.scss
    │       │   ├── LineGraph.js
    │       │   ├── LineGraph.scss
    │       │   ├── PieChart.js
    │       │   ├── PieChart.scss
    │       │   ├── ScatterGraph.js
    │       │   ├── ScatterGraph.scss
    │       │   ├── Table.js
    │       │   ├── Table.scss
    │       │   ├── TableHeader.js
    │       │   └── TableHeader.scss
    │       ├── FilterButton
    │       │   ├── FilterButton.js
    │       │   └── FilterButton.scss
    │       ├── FormFieldInput
    │       │   ├── FormFieldInput.js
    │       │   └── FormFieldInput.scss
    │       ├── FormFieldShow
    │       │   ├── FormFieldShow.js
    │       │   └── FormFieldShow.scss
    │       ├── FormFileUpload
    │       │   ├── FormFileUpload.js
    │       │   └── FormFileUpload.scss
    │       ├── IconWithBackground
    │       │   ├── IconWithBackground.js
    │       │   └── IconWithBackground.scss
    │       ├── ImageWithTitle
    │       │   ├── ImageWithTitle.js
    │       │   └── ImageWithTitle.scss
    │       ├── MultiSelectDropdown
    │       │   ├── MultiSelectDropdown.js
    │       │   └── MultiSelectDropdown.scss
    │       ├── Pagination
    │       │   ├── Pagination.js
    │       │   └── Pagination.scss
    │       ├── PaginationHook
    │       │   ├── Pagination.js
    │       │   └── Pagination.scss
    │       ├── RoundButton
    │       │   ├── RoundButton.js
    │       │   └── RoundButton.scss
    │       ├── SelectDropdown
    │       │   ├── SelectDropdown.js
    │       │   └── SelectDropdown.scss
    │       ├── SidebarOptions
    │       │   ├── SidebarOptions.js
    │       │   └── SidebarOptions.scss
    │       ├── SortBy
    │       │   ├── SortBy.js
    │       │   └── SortBy.scss
    │       ├── Table
    │       │   ├── Table.js
    │       │   └── Table.scss
    │       ├── TableHeader
    │       │   ├── TableHeader.js
    │       │   └── TableHeader.scss
    │       └── Toaster
    │           ├── Toaster.js
    │           └── Toaster.scss
    ├── index.css
    ├── index.js
    └── serviceWorker.js
```