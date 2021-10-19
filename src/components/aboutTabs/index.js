import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const AboutTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Overview" id="simple-tab-1" aria-controls="simple-tabpanel-1"/>
                    <Tab label="Prevention" id="simple-tab-2" aria-controls="simple-tabpanel-2" />
                    <Tab label="Symptoms" id="simple-tab-3" aria-controls="simple-tabpanel-3"/>
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <p>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.</p>
                <p>Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age.</p>
                <p>Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age.</p>
                <p>The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads. Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.</p>
                <p> The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols. It is important to practice respiratory etiquette, for example by coughing into a flexed elbow, and to stay home and self-isolate until you recover if you feel unwell.</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <p>To prevent infection and to slow transmission of COVID-19, do the following:</p>
                <ul>
                    <li>Get vaccinated when a vaccine is available to you.</li>
                    <li>Stay at least 1 metre apart from others, even if they don’t appear to be sick.</li>
                    <li>Wear a properly fitted mask when physical distancing is not possible or when in poorly ventilated settings.</li>
                    <li>Choose open, well-ventilated spaces over closed ones. Open a window if indoors.</li>
                    <li>Wash your hands regularly with soap and water or clean them with alcohol-based hand rub.</li>
                    <li>Cover your mouth and nose when coughing or sneezing.</li>
                    <li>If you feel unwell, stay home and self-isolate until you recover.</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
                <h3>Most common symptoms:</h3>
                <ul>
                    <li>fever</li>
                    <li>cough</li>
                    <li>tiredness</li>
                    <li>loss of taste or smell.</li>
                </ul>

                <h3>Less common symptoms:</h3>
                <ul>
                    <li>sore throat</li>
                    <li>headache</li>
                    <li>aches and pains</li>
                    <li>diarrhoea</li>
                    <li>a rash on skin, or discolouration of fingers or toes</li>
                    <li>red or irritated eyes.</li>
                </ul>
                <h3>Serious symptoms:</h3>
                <ul>
                    <li>difficulty breathing or shortness of breath</li>
                    <li>loss of speech or mobility, or confusion</li>
                    <li>chest pain.</li>
                </ul>
            </TabPanel>
        </Box>
    );
}