<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card card-w-title">
				<h1>AccordionPanel</h1>
				<Accordion>
					<AccordionTab header="Godfather I">
						The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
					</AccordionTab>
					<AccordionTab header="Godfather II">
						Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.
					</AccordionTab>
					<AccordionTab header="Godfather III">
						The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father. A decade earlier, he gave custody of his two children to Kay, who has since remarried.
					</AccordionTab>
				</Accordion>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card card-w-title">
				<h1>Panel</h1>
				<Panel header="Godfather I" :toggleable="true">
					<p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
						His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
						Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
						kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
				</Panel>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card card-w-title">
				<h1>TabView</h1>
				<TabView>
					<TabPanel header="Godfather I">
						The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
					</TabPanel>
					<TabPanel header="Godfather II">
						Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.
					</TabPanel>
					<TabPanel header="Godfather III">
						The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father. A decade earlier, he gave custody of his two children to Kay, who has since remarried.
					</TabPanel>
				</TabView>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card card-w-title">
				<h1>Fieldset</h1>
				<Fieldset legend="Toggleable" :toggleable="true">
					The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
					His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
					Through life of Michael the nature of the family business becomes clear. The business of the family is just like the head of the family,
					kind and benevolent to those who give respect,
					but given to ruthless violence whenever anything stands against the good of the family.
				</Fieldset>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card card-w-title">
				<h1>Toolbar</h1>
				<Toolbar>
					<template slot="left">
						<Button label="New" icon="pi pi-plus" style="margin-right: .25em" />
						<Button label="Upload" icon="pi pi-upload" class="p-button-success" />
						<i class="pi pi-bars p-toolbar-separator" style="margin-right: .25em" ></i>
						<Button label="Save" icon="pi pi-check" class="p-button-warning" />
					</template>
					<template slot="right">
						<Button icon="pi pi-search" style="margin-right: .25em" />
						<Button icon="pi pi-calendar" class="p-button-success" style="margin-right: .25em" />
						<Button icon="pi pi-times" class="p-button-danger" />
					</template>
				</Toolbar>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>