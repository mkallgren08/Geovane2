import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

export class Maps extends React.Component {
    render() {
        const MyMapComponent = compose(
            withProps({
                googleMapURL:
                "https://maps.googleapis.com/maps/api/js?key=AIzaSyApz8tuOvqnvFFyonTrlaDeY4cu9oP54L0&v=3.exp&libraries=geometry,drawing,places",
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div style={{ height: `400px` }} />,
                mapElement: <div style={{ height: `100%` }} />
            }),
            withScriptjs,
            withGoogleMap
        )(props => (
            <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
                <Marker position={{ lat: -34.397, lng: 150.644 }} />
            </GoogleMap>
        ));

        const enhance = _.identity;

        return (
            <MyMapComponent key="map" />
        )

    }

}

export default Maps;