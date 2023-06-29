import ACES from '../../Assets/Programs/ACES2.png';
import Aerospace from '../../Assets/Programs/Aerospace.png';
import Agricultural from '../../Assets/Programs/Agricultural.png';
import BMES from '../../Assets/Programs/BMES.png';
import Chemical from '../../Assets/Programs/Chemical.png';
import Civil from '../../Assets/Programs/civil.png';
import ELEESA from '../../Assets/Programs/ELEESA.png';
import geological from '../../Assets/Programs/geological.png';
import geomatic from '../../Assets/Programs/geomatic.png';
import Materials from '../../Assets/Programs/Materials.png';
import Mechanical from '../../Assets/Programs/Mechanical.png';
import Metallurgical from '../../Assets/Programs/Metallurgical.png';
import Petrochem from '../../Assets/Programs/Petrochem.png';
import Petroleum from '../../Assets/Programs/Petroleum.png';
import Telecom from '../../Assets/Programs/Telecom.png';
import comp from '../../Assets/BackgroundPics/coe.png';
import elec from '../../Assets/BackgroundPics/elec.png';
import aero from '../../Assets/BackgroundPics/aero.png';
import agric from '../../Assets/BackgroundPics/agric.png';
import biomed from '../../Assets/BackgroundPics/biomed.png';
import chem from '../../Assets/BackgroundPics/chem.png';
import geol from '../../Assets/BackgroundPics/geol.png';
import geom from '../../Assets/BackgroundPics/geom.png';
import mat from '../../Assets/BackgroundPics/mat.png';
import mech from '../../Assets/BackgroundPics/mech.png';
import civil from '../../Assets/BackgroundPics/civil.png';
import telecom from '../../Assets/BackgroundPics/telecom.png';
import petrochem from '../../Assets/BackgroundPics/petrochem.png';
import petroleum from '../../Assets/BackgroundPics/petroleum.png';
import metall from '../../Assets/BackgroundPics/metall.png';
import compv from "../../Pages/Programme Page/Images/Videos/COEvideo.mp4";
import biov from "../../Pages/Programme Page/Images/Videos/BiomedicalVideo.mp4";
import elecv from "../../Pages/Programme Page/Images/Videos/ElectricalVideo.mp4";
import telev from "../../Pages/Programme Page/Images/Videos/TelecomVideo.mp4";
import aerov from "../../Pages/Programme Page/Images/Videos/pexels-yan-krukov-8198659.mp4";
import agricv from "../../Pages/Programme Page/Images/Videos/video.mp4"


export const ProgramData = [
    {
        id: 'computer',
        name: 'Computer Engineering',
        img: `${ACES}`,
        pic: `${comp}`,
        vid: `${compv}`,
        paragraph: 'Computer engineering is a branch of electrical engineering that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.'
    },
    {
        id: 'biomedical',
        name: 'Biomedical Engineering',
        img: `${BMES}`,
        pic: `${biomed}`,
        vid: `${biov}`,
        paragraph: 'Biomedical engineering or medical engineering is the application of engineering principles and design concepts to medicine and biology for healthcare purposes.'
    },
    {
        id: 'electrical',
        name: 'Electrical Engineering',
        img: `${ELEESA}`,
        pic: `${elec}`,
        vid: `${elecv}`,
        paragraph: 'Electrical engineering is an engineering discipline concerned with the study, design, and application of equipment, devices, and systems which use electricity, electronics, and electromagnetism.'
    },
    {
        id: 'telecom',
        name: 'Telecom Engineering',
        img: `${Telecom}`,
        pic: `${telecom}`,
        vid: `${telev}`,
        paragraph: 'Biomedical engineering or medical engineering is the application of engineering principles and design concepts to medicine and biology for healthcare purposes.'
    },
    {
        id: 'aerospace',
        name: 'Aerospace Engineering',
        img: `${Aerospace}`,
        pic: `${aero}`,
        vid: `${aerov}`,
        paragraph: 'Aerospace engineering is the primary field of engineering concerned with the development of aircraft and spacecraft. It has two major and overlapping branches: aeronautical engineering and astronautical engineering.'

    },
    {
        id: 'agricultural',
        name: 'Agricultural Engineering',
        img: `${Agricultural}`,
        pic: `${agric}`,
        vid: `${agricv}`,
        paragraph: 'Agricultural engineering is the field of study and application of engineering science and designs principles for agriculture purposes, combining the various disciplines of mechanical, civil, electrical, food science, environmental, software, and chemical engineering to improve the efficiency of farms and agribusiness enterprisesnas well as to ensure sustainability of natural and renewable resources.'

    },
    {
        id: 'chemical',
        name: 'Chemical Engineering',
        img: `${Chemical}`,
        pic: `${chem}`,
        vid: `${compv}`,
        paragraph: 'Chemical engineering is an engineering field which deals with the study of operation and design of chemical plants as well as methods of improving production.'

    },
    {
        id: 'geological',
        name: 'Geological Engineering',
        img: `${geological}`,
        pic: `${geol}`,
        vid: `${biov}`,
        paragraph: 'Geological engineering (GEOE) is the development and conservation of natural resources in ways useful to humankind.'

    },
    {
        id: 'geomatic',
        name: 'Geomatic Engineering',
        img: `${geomatic}`,
        pic: `${geom}`,
        vid: `${elecv}`,
        paragraph: 'Geomatics engineering is the surveying of the entire or a part of the earth with various techniques (satellites positioning, satellite images processing, etc.) and the resulting spatial data is evaluated and expressed in maps and plans in the computer environment'

    },
    {
        id: 'materials',
        name: 'Materials Engineering',
        img: `${Materials}`,
        pic: `${mat}`,
        vid: `${aerov}`,
        paragraph: 'Material engineering focuses on creating new substances or changing the physical and chemical composition of existing materials to improve their properties. '

    },
    {
        id: 'civil',
        name: 'Civil Engineering',
        img: `${Civil}`,
        pic: `${civil}`,
        vid: `${telev}`,
        paragraph: 'Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewage systems, pipelines, structural components of buildings, and railways.'

    },
    {
        id: 'petroleum',
        name: 'Petroleum Engineering',
        img: `${Petroleum}`,
        pic: `${petroleum}`,
        vid: `${agricv}`,
        paragraph: 'Petroleum engineering is a field of engineering concerned with the activities related to the production of Hydrocarbons, which can be either crude oil or natural gas.'

    },
    {
        id: 'petrochemical',
        name: 'Petrochemical Engineering',
        img: `${Petrochem}`,
        pic: `${petrochem}`,
        vid: `${compv}`,
        paragraph: 'Petroleum engineering is a field of engineering concerned with the activities related to the production of Hydrocarbons, which can be either crude oil or natural gas.'

    },
    {
        id: 'metallurgical',
        name: 'Metallurgical Engineering',
        img: `${Metallurgical}`,
        pic: `${metall}`,
        vid: `${biov}`,
        paragraph: 'Metallurgical engineering is the study of metals and how metals can be safely transformed into products that benefit humanity such as surgical implants, computer chips, cars, materials for space exploration, and more.'

    },
    {
        id: 'mechanical',
        name: 'Mechanical Engineering',
        img: `${Mechanical}`,
        pic: `${mech}`,
        vid: `${elecv}`,
        paragraph: 'Mechanical engineering is the application of the principles and problem-solving techniques of engineering from design to manufacturing to the marketplace for any object. Mechanical engineers analyze their work using the principles of motion, energy, and force—ensuring that designs function safely, efficiently, and reliably, all at a competitive cost.'

    }

]