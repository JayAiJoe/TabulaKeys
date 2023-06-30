import ReactTimeAgo from 'react-time-ago'
import { parseISO } from 'date-fns';


function getStatusText(code) {
    switch(code) {
      case 0:
        return "Interest Check";
    case 1:
        return "In Production";
    case 2:
        return "Pending";
    }
  }

function getStatusTag(code) {
    switch(code) {
      case 0:
        return "tag is-warning is-medium";
    case 1:
        return "tag is-link is-medium";
    case 2:
        return "tag is-info is-medium";
    }
  }


export default function ProductCard({ info }) {

    return (
        <div class="card" style={{ marginLeft: 10, marginRight: 10  }}>
            
            <div class="card-image">
                
                <figure class="image is-19by9 ">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                </figure>
                
            </div>
            <div class="card-content">
            
                <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{info.name}</p>
                    <p class="subtitle is-6">{info.designer}</p>
                    
                </div>
                </div>
                <div class="content">
                    <progress 
                        class="progress"
                        value={info.takenUnits} max={info.maxUnits}/>
                    <span>{info.maxUnits - info.takenUnits} units left • {<ReactTimeAgo date={parseISO(info.datePublished)} locale="en-US"/>}</span>
                </div>
            </div>
            <div class={getStatusTag(info.status)} style={{position:"absolute",top:'2%',right:'2%'}}>{getStatusText(info.status)}</div>
</div>
    );
  }
