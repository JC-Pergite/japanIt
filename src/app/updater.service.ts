export class UpdaterService<T> {
	
  oldDays: T;
  currentDay: T;

  setDay(day: T) {
        this.oldDays = day;
        // console.log(oldDay);
        this.currentDay = this.replica(day)
                    // return this.oldDays; //goes void if not returned duh

  }

  getDay(): T {
            return this.currentDay;

  }

  restoreDay(): T {
    this.currentDay = this.oldDays;
    return this.getDay();
  }

  replica(day: T): T {
    return day;
  }
 }