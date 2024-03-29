import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityForm from "../form/ActivityForm";
import ActivityList from './ActivityList';

export default observer( function ActivityDashboard()
{
    const {activityStore} = useStore();
    const {loadActivities, ActivityRegistry} = activityStore;

    useEffect(() => {
        if (ActivityRegistry.size <=1) loadActivities();

    }, [ActivityRegistry.size, activityStore]);

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>


    return(
        <Grid>
            <Grid.Column width='10'>
            <ActivityList  />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Activity filters</h2>
            </Grid.Column>
        </Grid>
    )
})