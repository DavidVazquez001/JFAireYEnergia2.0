'use client';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

function SimpleTabs() {
    return (
        <TabGroup>
            <TabList className="flex space-x-4">
                <Tab
                    className={({ selected }) =>
                        selected
                            ? 'border-b-2 border-blue-500 text-blue-500'
                            : 'text-gray-500'
                    }
                >
                    Tab 1
                </Tab>
                <Tab
                    className={({ selected }) =>
                        selected
                            ? 'border-b-2 border-blue-500 text-blue-500'
                            : 'text-gray-500'
                    }
                >
                    Tab 2
                </Tab>
                <Tab
                    className={({ selected }) =>
                        selected
                            ? 'border-b-2 border-blue-500 text-blue-500'
                            : 'text-gray-500'
                    }
                >
                    Tab 3
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel>Contenido de Tab 1</TabPanel>
                <TabPanel>Contenido de Tab 2</TabPanel>
                <TabPanel>Contenido de Tab 3</TabPanel>
            </TabPanels>
        </TabGroup>
    );
}

export default SimpleTabs;
