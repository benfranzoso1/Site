import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

export default () => (
  <section className="faq">
    <div className="container">
      <h2 className="center">Frequent Questions</h2>
      <p className="medium center">
        Not all finance companys are created equally. We belive we have the best
        product and offer the best service.
      </p>
      <Tabs className="tabs">
        <TabList className="tablist">
          <Tab className="tab">Getting Pre-Qualifed</Tab>
          <Tab className="tab">How Does It Work?</Tab>
        </TabList>

        <TabPanel className="tabpanel">
          <Accordion allowZeroExpanded="true" className="accordian">
            <AccordionItem className="accordian_item">
              <AccordionItemHeading className="accordian_item_heading">
                <AccordionItemButton className="accordian_item_button">
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordian_item_panel">
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordian_item">
              <AccordionItemHeading className="accordian_item_heading">
                <AccordionItemButton className="accordian_item_button">
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordian_item_panel">
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordian_item">
              <AccordionItemHeading className="accordian_item_heading">
                <AccordionItemButton className="accordian_item_button">
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordian_item_panel">
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </TabPanel>
        <TabPanel className="tabpanel">
          <Accordion allowZeroExpanded="true" className="accordian">
            <AccordionItem className="accordian_item">
              <AccordionItemHeading className="accordian_item_heading">
                <AccordionItemButton className="accordian_item_button">
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordian_item_panel">
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordian_item">
              <AccordionItemHeading className="accordian_item_heading">
                <AccordionItemButton className="accordian_item_button">
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordian_item_panel">
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordian_item">
              <AccordionItemHeading className="accordian_item_heading">
                <AccordionItemButton className="accordian_item_button">
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordian_item_panel">
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </TabPanel>
      </Tabs>
    </div>
  </section>
)
