import _ from "lodash";
import { ChangeEvent, useEffect, useState, useRef, MouseEvent } from "react";
import KakaomapPresenter from "./kakaomap.presenter";
import { KaoKeyWord } from "./kakaomap.types";
import { useRecoilState } from "recoil";
import { kakaoAddress } from "../../store/kakaounit";
import { SearchState, SearchBarIsActiveState } from "../../store/index";

export default function KaKaoMapContainer(props: KaoKeyWord) {
  const [info, setInfo] = useState();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [geoLat, setgeoLat] = useState(0);
  const [geoLng, setgeoLng] = useState(0);

  const [address, setAddress] = useRecoilState(kakaoAddress);

  const [search] = useRecoilState(SearchState);
  const [isActive1, setIsActive1] = useRecoilState(SearchBarIsActiveState);
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  const [isActive, setIsActive] = useState(false);
  const [roadViewFlag, setroadViewFlag] = useState(false);
  const [trrapicFlag, setTrrapicFlag] = useState(false);
  const [contentFlag, setContentFlag] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const onCancel = () => {
    setIsOpen(true);
  };

  const onClickButton = () => {
    setIsActive1((prev) => !prev);
  };
  const onClickTrrapic = () => {
    setTrrapicFlag((prev) => !prev);
  };

  const onClickContent = () => {
    setContentFlag((prev) => !prev);
  };

  const onClickRoadView = () => {
    setroadViewFlag((prev) => !prev);
    setIsOpen(true);
  };

  const markerClick = (marker: any) => () => {
    setAddress(marker);
    setInfo(marker);
    setContentFlag((prev) => !prev);
  };

  const onclickGeoLocation = () => {
    const handleSuccess = (pos: any) => {
      const { latitude, longitude } = pos.coords;
      setgeoLat(latitude);
      setgeoLng(longitude);
    };
    const { geolocation } = navigator;
    geolocation.getCurrentPosition(handleSuccess);
  };

  useEffect(() => {
    btnRef.current?.click();
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(search, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];
        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
            address_name: data[i].address_name,
            group_code: data[i].category_group_code,
            group_name: data[i].category_group_name,
            category_name: data[i].category_name,
            phone: data[i].phone,
            place_url: data[i].place_url,
            road_name: data[i].road_address_name,
          });
          // @ts-ignore~
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          setLat(data[i].y);
          setLng(data[i].x);
        }
        setMarkers(markers);
        map.setBounds(bounds);
      }
    });
  }, [map, isActive, isActive1]);

  return (
    <KakaomapPresenter
      lat={lat}
      lng={lng}
      geoLat={geoLat}
      geoLng={geoLng}
      setMap={setMap}
      markers={markers}
      // onChangeSearchbar={onChangeSearchbar}
      info={info}
      markerClick={markerClick}
      setInfo={setInfo}
      onclickGeoLocation={onclickGeoLocation}
      btnRef={btnRef}
      isActive={isActive}
      onClickTrrapic={onClickTrrapic}
      roadViewFlag={roadViewFlag}
      onClickRoadView={onClickRoadView}
      address={address}
      trrapicFlag={trrapicFlag}
      contentFlag={contentFlag}
      onClickContent={onClickContent}
      onCancel={onCancel}
      isOpen={isOpen}
      onClickButton={onClickButton}
      search={search}
    />
  );
}

//  const getDebounce = _.debounce((data: string) => {
//     setIsActive((prev) => !prev);
//   }, 1500);

//   function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
//     getDebounce(event.target.value);
//     setKeyword(event.target.value);
//   }
