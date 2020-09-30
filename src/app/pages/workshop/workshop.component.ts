import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-workshop",
  templateUrl: "./workshop.component.html",
  styleUrls: ["./workshop.component.scss"],
})
export class WorkshopComponent implements OnInit {
  //Will make an interface for all of this in the future :/
  open = false;
  currentWorkshopSelected = {
    picture: "",
    eventName: "",
    eventDate: "",
    eventDescription: "",
  };

  carouselInfo = [
    {
      picture:
        "https://cdn.cnn.com/cnnnext/dam/assets/191203174105-edward-whitaker-1-large-169.jpg",
      eventName: "Event 1",
      eventDate: "Event Date 1",
      eventDescription: "Event Description 1",
    },
    {
      picture:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      eventName: "Event 2",
      eventDate: "Event Date 2",
      eventDescription: "Event Description 2",
    },
    {
      picture:
        "https://cdn.cnn.com/cnnnext/dam/assets/191203174105-edward-whitaker-1-large-169.jpg",
      eventName: "Event 3",
      eventDate: "Event Date 3",
      eventDescription: "Event Description 3",
    },
    {
      picture:
        "https://www.canon.com.au/-/media/images/learning/how-to-print-professional-photos-at-home/image-1-kirkr-twelveapostlesvictoria-1000.ashx?la=en",
      eventName: "Event 4",
      eventDate: "Event Date 4",
      eventDescription: "Event Description 4",
    },
  ];

  upcomingWorkshops = [
    {
      picture:
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
      eventName: "Event 1",
      eventDate: "Date 1",
      eventDescription: "Description 1",
    },
    {
      picture:
        "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
      eventName: "Event 2",
      eventDate: "Date 2",
      eventDescription: "Description 2",
    },
    {
      picture:
        "https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg",
      eventName: "Event 3",
      eventDate: "Date 3",
      eventDescription: "",
    },
    {
      picture:
        "https://image.shutterstock.com/image-photo/spring-blossom-background-beautiful-nature-260nw-1033292395.jpg",
      eventName: "Event 4",
      eventDate: "Date 4",
      eventDescription: "",
    },
    {
      picture:
        "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      eventName: "Event 5",
      eventDate: "Date 5",
      eventDescription: "",
    },
    {
      picture:
        "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
      eventName: "Event 6",
      eventDate: "Date 6",
      eventDescription: "",
    },
  ];

  pastWorkshops = [
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    "https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg",
    "https://image.shutterstock.com/image-photo/spring-blossom-background-beautiful-nature-260nw-1033292395.jpg",
    "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-260nw-668593321.jpg",
    "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg",
    "https://18ogess18pg1ptgub1nm316t-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/21333414_web1_200420-CRM-earth-day-EARTHDAY_1.jpg",
  ];

  activeCarouselItem = 0;
  constructor() {}

  ngOnInit(): void {}

  previousEvent() {
    if (this.activeCarouselItem === 0) {
      return (this.activeCarouselItem = this.carouselInfo.length - 1);
    }

    return (this.activeCarouselItem = this.activeCarouselItem - 1);
  }

  nextEvent() {
    if (this.activeCarouselItem >= this.carouselInfo.length - 1) {
      return (this.activeCarouselItem = 0);
    }
    return (this.activeCarouselItem = this.activeCarouselItem + 1);
  }

  togglePopUp(workshop: any) {
    this.open = !this.open;
    this.currentWorkshopSelected = workshop;
  }

  toggleOpen() {
    this.open = !this.open;
  }
}
