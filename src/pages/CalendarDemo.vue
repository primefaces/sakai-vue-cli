<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">
				<FullCalendar :events="events" :options="options" />

				<Dialog :visible.sync="eventDialog" :style="{width: '450px'}" header="Event Details" :modal="true" :closable="true">
					<div class="p-fluid">
						<div class="p-field">
							<label for="title">Title</label>
							<InputText id="title" v-if="clickedEvent" v-model="changedEvent.title" required="true" autofocus/>
						</div>
						<div class="p-field">
							<label for="start">From</label>
							<Calendar id="start" v-if="clickedEvent" v-model="changedEvent.start" :showTime="true" appendTo="body"/>
						</div>
						<div class="p-field">
							<label for="end">To</label>
							<Calendar id="end" v-if="clickedEvent" v-model="changedEvent.end" :showTime="true" appendTo="body"/>
						</div>
						<div class="p-field-checkbox">
							<Checkbox id="allday" name="allday" value="All Day" v-model="changedEvent.allDay" />
							<label for="allday">All Day</label>
						</div>
					</div>
					<template #footer>
						<Button label="Save" icon="pi pi-check" class="p-button-text" @click="save"/>
						<Button label="Reset" icon="pi pi-refresh" class="p-button-text" @click="reset" />
					</template>
				</Dialog>
			</div>
		</div>
	</div>
</template>

<script>
import EventService from '../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default {
	data() {
		return {
			eventDialog: false,
			clickedEvent: null,
			changedEvent: {title:'', start: null, end:'', allDay: null},
			options: {
				plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
				defaultDate: '2019-01-01',
				header: {
					left: 'prev,next',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay'
				},
				editable: true,
				eventClick: (e) => {
					this.eventDialog = true;

					this.clickedEvent = e.event;

					this.changedEvent.title = this.clickedEvent.title;
					this.changedEvent.start = this.clickedEvent.start;
					this.changedEvent.end = this.clickedEvent.end;
				}
			},
			events: null
		};
	},
	eventService: null,
	created() {
		this.eventService = new EventService();
	},
	mounted() {
		this.eventService.getEvents().then(data => this.events = data);
	},
	methods: {
		findIndexById(id) {
			let index = -1;
			for (let i = 0; i < this.events.length; i++) {
				if (this.events[i].id === id) {
					index = i;
					break;
				}
			}

			return index;
		},
		save() {
			this.eventDialog = false;

			this.clickedEvent.setProp('title', this.changedEvent.title)
			this.clickedEvent.setStart(this.changedEvent.start)
			this.clickedEvent.setEnd(this.changedEvent.end)
			this.clickedEvent.setAllDay(this.changedEvent.allDay)

			this.changedEvent = {title:'', start: null, end:'', allDay: null};
		},
		reset() {
			this.changedEvent.title = this.clickedEvent.title;
			this.changedEvent.start = this.clickedEvent.start;
			this.changedEvent.end = this.clickedEvent.end;
		}
	}
}
</script>

<style scoped>

</style>
