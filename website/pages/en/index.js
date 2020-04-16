/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            {/* <Button href="#try">Try It Out</Button> */}
            <Button href={docUrl('financialDashboard/doc1.html')}>Financial Dashboard Web Docs</Button>
            <Button href={docUrl('myPrice/mp_doc1.html')}>My Price Dashboard Web Docs</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Our Features</h2>
        <MarkdownBlock>Information management tool that tracks, gathers, and displays business data in interactive and customizable visualizations that enable users to monitor the health of a business, analyze processes, and provide them with actionable insights.</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'Real-time is all the rage these days, and why shouldn’t it be? Just think - your data automatically updated without the tedious and error-prone practice of manually entering new information. A real time dashboard allows you to monitor activity as it happens throughout your business processes. Your charts and reports are updated continuously in less than a second after the action occurs. Gone are the days of a decision-maker requesting a report for a meeting that gets rescheduled leading the report preparer to have to do the work twice. No matter when you need to look at the report, the charts are up to date.',
            image: `${baseUrl}img/piechart.png`, //undraw_code_review.svg
            imageAlign: 'left',
            title: 'You get real-time updates.',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'All your key performance indicators become visible from a centralized location, formed on a single screen, no matter the data source(s) you need to utilize. You can easily connect flat files, CRM- and ERP data, databases, helpdesk, social media, and many more, that will provide you with instant access to all the business information you might gather and need to analyze. ',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'What does are tools provide?',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'With the possibility to utilize artificial intelligence, the dashboarding software augments the traditional means of monitoring, analyzing, and generating actionable insights, and takes you to the next level of data management. If a business anomaly occurs or a specific goal is met, modern tools will instantaneously alert you, hence, you can take immediate action and prevent a business disaster or celebrate your newly reached goals. You can benefit from neural networks, pattern recognition or threshold alerts that will help you spot trends and identify patterns, notifying you on important changes even on your mobile.',
            image: `${baseUrl}img/myteam.png`,
            imageAlign: 'right',
            title: 'Keep track of all the transactions',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Systematic and logical arrangement of data in the form of Rows and Columns with respect to the characteristics of data',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Tabular Representation',
          },
          {
            content: 'Visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data.',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Graphical View',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
