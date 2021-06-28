import logo from './logo.svg';
import './App.css';
import Heading from '@govuk-react/heading';
import Details from '@govuk-react/details';
import TopNav from '@govuk-react/top-nav';
import Tag from '@govuk-react/tag';
import Divider from '@material-ui/core/Divider';

import {
    Grid,
    Typography,
} from "@material-ui/core";

function CatLabel() {
    return (
        <div>
            Hi sdfasdfasdf
        </div>
    )
}

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <TopNav company="My LA" serviceTitle="" search="" active={0} className="App-navbar">

            </TopNav>
        </header>
        <Grid container justify="center" direction="row" alignItems="stretch">
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <Heading className="App-header-text">My Request</Heading>
                <div className="Description-text">
                    We look to perform an assessment for you within 6 weeks, and we prioritise your request based on
                    how urgent your situation is. If there is a significant change to your circumstances please
                    contact the council.
                </div>
                <Grid container justify="flex-start" direction="row" alignItems="flex-start">
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs={9}>
                        <Details summary="Contact Customer Service">
                            You contacted customer service on <b>June 9, 2021</b>.
                        </Details>
                    </Grid>
                    <Grid item xs={3}>
                        <Tag>Complete</Tag>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs={9}>
                        <Details summary="Left Customer Service">
                            Your request has left customer service on <b>June 10, 2021</b> and has been passed to a relevant team.
                        </Details>
                    </Grid>
                    <Grid item xs={3}>
                        <Tag>Complete</Tag>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs={9}>
                        <Details summary="Assigned to Worker" open="true">
                            <b>June 11, 2021</b> - Your request is with David Peterson at 07639281650.
                            You do not need to do anything, they'll contact you.
                        </Details>
                    </Grid>
                    <Grid item xs={3}>
                        <Tag className="Tag-current">In Progress</Tag>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs={9}>
                        <Details summary="Maintaining Contact">
                            Once your allocated worker has contacted you, they will make arrangements to maintain on-going contact.
                        </Details>
                    </Grid>
                    <Grid item xs={3}>
                        <Tag inactive="true">Not Started</Tag>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs={9}>
                        <Details summary="Complete">
                            When you have received the necessary support, your request will be complete.
                            If you have any further requests you should contact the Customer Service team on 01495762200
                        </Details>
                    </Grid>
                    <Grid item xs={3}>
                        <Tag inactive="true">Not Started</Tag>
                    </Grid>

                   <Grid item xs={12}>
                        <Divider />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    </div>
  );
}

export default App;
