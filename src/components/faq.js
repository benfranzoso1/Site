import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


export default () => (
<section className="faq">
    <div className="container">
    <Tabs className="tabs">
    <TabList className="tablist">
      <Tab className="tab">Getting Pre-Qualifed</Tab>
      <Tab className="tab">How Does It Work?</Tab>
    </TabList>

    <TabPanel className="tabpanel">
    <Accordion allowZeroExpanded="true">
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </TabPanel>
    <TabPanel className="tabpanel">
      <p>
        <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
        Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
        released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
        as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
        appears in many games throughout the Mario franchise, often as a sidekick to his brother.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
    <TabPanel className="tabpanel">
      <p>
        <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
        is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
        Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
        attack by Bowser. She often plays the damsel in distress role within the series and
        is the lead female. She is often portrayed as Mario's love interest and has appeared
        in Super Princess Peach, where she is the main playable character.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
  </Tabs>
    </div>
</section> 
)

