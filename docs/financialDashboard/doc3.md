---
id: doc3
title: Project Directory Structure
sidebar_label: Project Directory Structure
---

<!--JavaScript-->

```js
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
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   ├── exampledoc4.md
│   └── exampledoc5.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── images
│   │   ├── chat
│   │   │   ├── attachment.jpg
│   │   │   ├── download.jpg
│   │   │   └── send.png
│   │   ├── collectionprogress
│   │   │   └── arrowLeft.png
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
│   │   ├── fieldexecutive
│   │   │   ├── cash.svg
│   │   │   ├── cheque.svg
│   │   │   ├── demanddraft.svg
│   │   │   ├── person1.jpeg
│   │   │   ├── person2.jpeg
│   │   │   ├── person3.jpeg
│   │   │   └── person4.jpeg
│   │   ├── sidenav
│   │   │   ├── activitylogs.png
│   │   │   ├── collection.png
│   │   │   ├── collectionprogress.png
│   │   │   ├── dispute.png
│   │   │   ├── filled
│   │   │   │   ├── activitylogs.png
│   │   │   │   ├── collection.png
│   │   │   │   ├── dispute.png
│   │   │   │   ├── home.png
│   │   │   │   ├── master data filled icon.png
│   │   │   │   ├── mycustomers.png
│   │   │   │   ├── mytasks.png
│   │   │   │   └── myteam.png
│   │   │   ├── home.png
│   │   │   ├── mapinvoices.png
│   │   │   ├── mycustomer.png
│   │   │   ├── mycustomers.png
│   │   │   ├── mysubmissions.png
│   │   │   ├── mytasks.png
│   │   │   ├── myteam.png
│   │   │   ├── onlinecollection.png
│   │   │   ├── physicalcollection.png
│   │   │   ├── temp
│   │   │   ├── user.png
│   │   │   ├── waycool.png
│   │   │   └── waycool2.png
│   │   ├── table
│   │   │   ├── download.svg
│   │   │   ├── filter.svg
│   │   │   ├── search.svg
│   │   │   └── send.svg
│   │   ├── userplaceholder.png
│   │   └── userplaceholder2.png
│   └── index.html
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src
│   ├── Components
│   │   ├── App.js
│   │   ├── Assets
│   │   │   ├── Dashboard
│   │   │   │   ├── calendar.svg
│   │   │   │   ├── filter.svg
│   │   │   │   ├── user.svg
│   │   │   │   └── users.svg
│   │   │   ├── Data
│   │   │   │   ├── CollectionProgress.js
│   │   │   │   ├── Dashboard.js
│   │   │   │   ├── Denominations.js
│   │   │   │   ├── Disputes.js
│   │   │   │   ├── FieldExecutiveData.js
│   │   │   │   ├── MapInvoicesCollection.js
│   │   │   │   ├── MyTeamData.js
│   │   │   │   ├── OnlineCollectionData.js
│   │   │   │   └── SubmissionsData.js
│   │   │   ├── Header
│   │   │   │   ├── baseline-search-24px.svg
│   │   │   │   ├── outline-notifications-24px.svg
│   │   │   │   └── outline-settings-24px.svg
│   │   │   ├── Offline_Collection_Cards
│   │   │   │   ├── Group.svg
│   │   │   │   ├── cash.svg
│   │   │   │   ├── cash_white.svg
│   │   │   │   ├── cheque.svg
│   │   │   │   ├── cheque_white.svg
│   │   │   │   ├── chevron-right.svg
│   │   │   │   ├── demanddraft.svg
│   │   │   │   ├── demanddraft_white.svg
│   │   │   │   ├── money-bag.svg
│   │   │   │   ├── money.svg
│   │   │   │   ├── search.svg
│   │   │   │   ├── user.svg
│   │   │   │   └── verified.svg
│   │   │   ├── Online_Collections
│   │   │   │   ├── chevron-right.svg
│   │   │   │   ├── filter.svg
│   │   │   │   └── search.svg
│   │   │   ├── Submissions
│   │   │   │   ├── sortby.svg
│   │   │   │   └── user.svg
│   │   │   ├── image_not_found.png
│   │   │   ├── menu.svg
│   │   │   ├── waycoolLogo.png
│   │   │   └── waycoolLogo@4x@2x.png
│   │   ├── Common
│   │   │   ├── CheckboxLogic.js
│   │   │   ├── FileFormats.js
│   │   │   ├── Format.js
│   │   │   ├── Header
│   │   │   │   ├── Header.js
│   │   │   │   └── Header.scss
│   │   │   ├── PaginationLogic.js
│   │   │   ├── Sidebar
│   │   │   │   ├── Sidebar.js
│   │   │   │   └── Sidebar.scss
│   │   │   ├── TextCapitalize.js
│   │   │   ├── ToasterCreator.js
│   │   │   ├── createUniqueName.js
│   │   │   └── handleSidebar.js
│   │   ├── Constant
│   │   │   ├── BarGraphPopupData.js
│   │   │   ├── CollectionProgressStages.js
│   │   │   ├── PaymentModes.js
│   │   │   ├── Tabs.js
│   │   │   └── accessControl.js
│   │   ├── Screens
│   │   │   ├── AccessDenied.js
│   │   │   ├── ActivityLogs
│   │   │   │   ├── ActivityLogs.js
│   │   │   │   └── ActivityLogs.scss
│   │   │   ├── Auth.js
│   │   │   ├── BasicLayout.js
│   │   │   ├── CollectionProgress
│   │   │   │   ├── CollectionProgress.js
│   │   │   │   └── CollectionProgress.scss
│   │   │   ├── Dashboard
│   │   │   │   ├── CustomerOutstanding.js
│   │   │   │   ├── CustomerOutstanding.scss
│   │   │   │   ├── Dashboard.js
│   │   │   │   └── Dashboard.scss
│   │   │   ├── Disputes
│   │   │   │   ├── Chat.js
│   │   │   │   ├── Chat.scss
│   │   │   │   ├── CollectionDisputes.js
│   │   │   │   ├── CollectionDisputes.scss
│   │   │   │   ├── CreditDisputes.js
│   │   │   │   ├── CreditDisputes.scss
│   │   │   │   ├── DebitDisputes.js
│   │   │   │   ├── DebitDisputes.scss
│   │   │   │   ├── InvoiceDisputes.js
│   │   │   │   ├── InvoiceDisputes.scss
│   │   │   │   ├── PaymentDisputes.js
│   │   │   │   └── PaymentDisputes.scss
│   │   │   ├── MapInvoices
│   │   │   │   ├── Collection.js
│   │   │   │   ├── Collection.scss
│   │   │   │   ├── MapInvoices.js
│   │   │   │   └── MapInvoices.scss
│   │   │   ├── MyCustomer
│   │   │   │   ├── MyCustomer.js
│   │   │   │   └── MyCustomer.scss
│   │   │   ├── MyTeam
│   │   │   │   ├── MyTeam.js
│   │   │   │   ├── MyTeam.scss
│   │   │   │   ├── Performance.js
│   │   │   │   └── Performance.scss
│   │   │   ├── OnlineCollection
│   │   │   │   ├── OnlineCollection.js
│   │   │   │   └── OnlineCollection.scss
│   │   │   ├── PhysicalCollection
│   │   │   │   ├── Collection.js
│   │   │   │   ├── Collection.scss
│   │   │   │   ├── CustomerCollection.js
│   │   │   │   ├── CustomerCollection.scss
│   │   │   │   ├── FieldExecutive.js
│   │   │   │   ├── FieldExecutive.scss
│   │   │   │   ├── MapInvoices.js
│   │   │   │   ├── MapInvoices.scss
│   │   │   │   ├── PhysicalCollection.js
│   │   │   │   └── PhysicalCollection.scss
│   │   │   └── Submissions
│   │   │       ├── Submissions.js
│   │   │       └── Submissions.scss
│   │   ├── Services
│   │   │   ├── Api.js
│   │   │   └── History.js
│   │   └── Utils
│   │       ├── AcceptBtn
│   │       │   └── AcceptBtn.js
│   │       ├── Autosuggests
│   │       │   ├── Autosuggests.js
│   │       │   └── Autosuggests.scss
│   │       ├── BulkAction
│   │       │   ├── BulkAction.js
│   │       │   └── BulkAction.scss
│   │       ├── Calender
│   │       │   ├── Calender.js
│   │       │   └── Calender.scss
│   │       ├── CheckBox
│   │       │   ├── CheckBox.js
│   │       │   └── CheckBox.scss
│   │       ├── ChequeOrDraftCards
│   │       │   ├── Collection
│   │       │   │   ├── ChequeOrDraftCollection.js
│   │       │   │   └── ChequeOrDraftCollection.scss
│   │       │   └── Submittion
│   │       │       ├── ChequeOrDraftSubmittion.js
│   │       │       └── ChequeOrDraftSubmittion.scss
│   │       ├── CollectionProgress
│   │       │   ├── Table.js
│   │       │   ├── Table.scss
│   │       │   ├── TrackProgress.js
│   │       │   └── TrackProgress.scss
│   │       ├── CrossButton.js
│   │       ├── Dashboard
│   │       │   ├── AutoMultiSelect.js
│   │       │   ├── AutoMultiSelect.scss
│   │       │   ├── Autosuggests.js
│   │       │   ├── Autosuggests.scss
│   │       │   ├── BarGraph.js
│   │       │   ├── BarGraph.scss
│   │       │   ├── BarGraphPopup.js
│   │       │   ├── BarGraphPopup.scss
│   │       │   ├── Cards.js
│   │       │   ├── Cards.scss
│   │       │   ├── CustomerOutstandingTable.js
│   │       │   ├── CustomerOutstandingTable.scss
│   │       │   ├── FilterBox.js
│   │       │   ├── FilterBox.scss
│   │       │   ├── FilterTagsDisplay.js
│   │       │   ├── FilterTagsDisplay.scss
│   │       │   ├── FromToDateRange.js
│   │       │   ├── FromToDateRange.scss
│   │       │   ├── LineGraph.js
│   │       │   ├── LineGraph.scss
│   │       │   ├── PieChart.js
│   │       │   ├── PieChart.scss
│   │       │   ├── ScatterGraph.js
│   │       │   ├── ScatterGraph.scss
│   │       │   ├── Table.js
│   │       │   ├── Table.scss
│   │       │   ├── TableHeader.js
│   │       │   └── TableHeader.scss
│   │       ├── DenominationCardContainer
│   │       │   ├── DenominationCardContainer.js
│   │       │   └── DenominationCardContainer.scss
│   │       ├── DenominationCards
│   │       │   ├── DenominationCards.js
│   │       │   └── DenominationCards.scss
│   │       ├── DenominationCollection
│   │       │   ├── DenominationCollection.js
│   │       │   └── DenominationCollection.scss
│   │       ├── DenominationSubmittion
│   │       │   ├── DenominationSubmittion.js
│   │       │   └── DenominationSubmittion.scss
│   │       ├── DifferenceStrip
│   │       │   ├── DifferenceStrip.js
│   │       │   └── DifferenceStrip.scss
│   │       ├── Disputes
│   │       │   ├── AddParticipant.js
│   │       │   ├── AddParticipant.scss
│   │       │   ├── ChatBox.js
│   │       │   ├── ChatBox.scss
│   │       │   ├── ChatBubble.js
│   │       │   ├── ChatBubble.scss
│   │       │   ├── DisputeCard.js
│   │       │   ├── DisputeCard.scss
│   │       │   ├── Form.js
│   │       │   ├── Form.scss
│   │       │   ├── Table.js
│   │       │   ├── Table.scss
│   │       │   ├── ViewDocs.js
│   │       │   └── ViewDocs.scss
│   │       ├── FilterButton
│   │       │   ├── FilterButton.js
│   │       │   └── FilterButton.scss
│   │       ├── FormFieldInput
│   │       │   ├── FormFieldInput.js
│   │       │   └── FormFieldInput.scss
│   │       ├── FormFieldShow
│   │       │   ├── FormFieldShow.js
│   │       │   └── FormFieldShow.scss
│   │       ├── IconWithBackground
│   │       │   ├── IconWithBackground.js
│   │       │   └── IconWithBackground.scss
│   │       ├── ImageWithTitle
│   │       │   ├── ImageWithTitle.js
│   │       │   └── ImageWithTitle.scss
│   │       ├── MapInvoices
│   │       │   ├── Collection
│   │       │   │   ├── Table.js
│   │       │   │   └── Table.scss
│   │       │   └── Table
│   │       │       ├── Table.js
│   │       │       └── Table.scss
│   │       ├── MultiSelectDropdown
│   │       │   ├── MultiSelectDropdown.js
│   │       │   └── MultiSelectDropdown.scss
│   │       ├── MyCustomer
│   │       │   ├── MoneyCards.js
│   │       │   ├── MoneyCards.scss
│   │       │   ├── Table.js
│   │       │   └── Table.scss
│   │       ├── MyTeam
│   │       │   └── Table
│   │       │       ├── Table.js
│   │       │       └── Table.scss
│   │       ├── OfflineCards
│   │       │   ├── OfflineCards.js
│   │       │   └── OfflineCards.scss
│   │       ├── OfflineCollection
│   │       │   ├── Autosuggests.js
│   │       │   └── Autosuggests.scss
│   │       ├── OnlineCollection
│   │       │   ├── Button
│   │       │   │   ├── Button.js
│   │       │   │   └── Button.scss
│   │       │   ├── Filter
│   │       │   │   ├── Filter.js
│   │       │   │   └── Filter.scss
│   │       │   ├── Search
│   │       │   │   ├── Search.js
│   │       │   │   └── Search.scss
│   │       │   └── Table
│   │       │       ├── Table.js
│   │       │       └── Table.scss
│   │       ├── Pagination
│   │       │   ├── Pagination.js
│   │       │   └── Pagination.scss
│   │       ├── PaymentModeStrip
│   │       │   ├── PaymentModeStrip.js
│   │       │   └── PaymentModeStrip.scss
│   │       ├── Performance
│   │       │   ├── BarChart.js
│   │       │   ├── BarChart.scss
│   │       │   ├── OverviewCards.js
│   │       │   ├── OverviewCards.scss
│   │       │   ├── PieChart.js
│   │       │   └── PieChart.scss
│   │       ├── SelectDropdown
│   │       │   ├── SelectDropdown.js
│   │       │   └── SelectDropdown.scss
│   │       ├── SidebarOptions
│   │       │   ├── SidebarOptions.js
│   │       │   └── SidebarOptions.scss
│   │       ├── SortBy
│   │       │   ├── SortBy.js
│   │       │   └── SortBy.scss
│   │       ├── Submissions
│   │       │   └── Table
│   │       │       ├── Table.js
│   │       │       └── Table.scss
│   │       ├── Table
│   │       │   ├── Table.js
│   │       │   └── Table.scss
│   │       ├── TableHeader
│   │       │   ├── TableHeader.js
│   │       │   └── TableHeader.scss
│   │       └── Toaster
│   │           ├── Toaster.js
│   │           └── Toaster.scss
│   ├── index.css
│   ├── index.js
│   └── serviceWorker.js
└── website
    ├── README.md
    ├── blog
    │   ├── 2016-03-11-blog-post.md
    │   ├── 2017-04-10-blog-post-two.md
    │   ├── 2017-09-25-testing-rss.md
    │   ├── 2017-09-26-adding-rss.md
    │   └── 2017-10-24-new-version-1.0.0.md
    ├── core
    │   └── Footer.js
    ├── i18n
    │   └── en.json
    ├── package-lock.json
    ├── package.json
    ├── pages
    │   └── en
    │       ├── help.js
    │       ├── index.js
    │       └── users.js
    ├── sidebars.json
    ├── siteConfig.js
    └── static
        ├── css
        │   └── custom.css
        └── img
            ├── favicon.ico
            ├── oss_logo.png
            ├── undraw_code_review.svg
            ├── undraw_monitor.svg
            ├── undraw_note_list.svg
            ├── undraw_online.svg
            ├── undraw_open_source.svg
            ├── undraw_operating_system.svg
            ├── undraw_react.svg
            ├── undraw_tweetstorm.svg
            ├── undraw_youtube_tutorial.svg
            └── waycool.png
```
