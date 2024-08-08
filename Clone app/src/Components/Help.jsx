import React, {useState} from 'react';
import Accordionfaq from './Accordionfaq';
import {Helppartnerfaq} from '../Fetch_Data/Helppartnerfaq'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default function Help() {
  const [key, setKey] = useState('tab2')
  
  return (
    <>
      <div className='bg-blue-950 py-12'>
        <div className='px-12 pb-12 text-white'>
          <h1 className='text-4xl font-bold pb-3'>Help & Support</h1>
          <p className='text-[18px]'>Let's take a step ahead and help you better.</p>
        </div>
        <div className='w-[1200px] px-8 py-7 mx-auto bg-white relative'>
            <Tabs className="helptabs flex gap-12" activeKey={key} onSelect={(k) => setKey(k)}>
              <TabList className="mr-3 bg-slate-200 pl-9 pr-0 py-2">
                <Tab className="pl-6 pr-12 py-5 text-[18px] cursor-pointer focus:outline-none" eventKey="tab1">Partner Onboarding</Tab>
                <Tab className="pl-6 pr-12 py-5 text-[18px] cursor-pointer focus:outline-none" eventKey="tab2">Legal</Tab>
                <Tab className="pl-6 pr-12 py-5 text-[18px] cursor-pointer focus:outline-none" eventKey="tab3">FAQs</Tab>
              </TabList>
              <div className="relative w-[700px]">
                <TabPanel eventKey="tab1">
                  <h1 className='text-3xl mb-4'>Partner Onboarding</h1>
                  <div>
                    <div className="accordion">
                      {Helppartnerfaq.slice(0, 5).map(({ title, content }) => (
                        <Accordionfaq title={title} content={content} />
                      ))}
                    </div>
                  </div>
                </TabPanel>
                <TabPanel eventKey="tab2"><h1 className='text-3xl mb-4'>Legal</h1>
                  <div>
                    <div className="accordion">
                      {Helppartnerfaq.slice(5, 13).map(({ title, content }) => (
                        <Accordionfaq title={title} content={content} />
                      ))}
                    </div>
                  </div></TabPanel>
                <TabPanel eventKey="tab3"><h1 className='text-3xl mb-4'>FAQs</h1>
                  <div>
                    <div className="accordion">
                      {Helppartnerfaq.slice(13, 20).map(({ title, content }) => (
                        <Accordionfaq title={title} content={content} />
                      ))}
                    </div>
                  </div></TabPanel>
              </div>
            </Tabs>
        </div>
      </div>
    </>
  )
}
