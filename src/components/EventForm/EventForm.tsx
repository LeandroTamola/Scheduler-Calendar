import { parseISO } from "date-fns";
import { FC } from "react";
import { useSelector } from "react-redux";

import { selectedEventSelector } from "../../redux/events/selectors";
import { EventType } from "../../types/event";
import { Form, FormTextInput } from "../Form";
import { DatePicker } from "../Form/components/DatePicker";
import { EventFormData, FORM_FIELDS, validationSchema } from "./constants";
import { Button } from "../ui/Button";
import { ButtonsContainer, inlineStyles } from "./styles";

interface Props {
  onEventAdded: (event: EventType) => void;
  onEventUpdated: (event: EventType) => void;
  onEventDeleted: (eventId: number) => void;
}

const EventForm: FC<Props> = ({
  onEventAdded,
  onEventUpdated,
  onEventDeleted,
}) => {
  const selectedEvent = useSelector(selectedEventSelector);
  const isEditMode = !!selectedEvent;

  const handleSubmit = (formData: EventFormData) => {
    const { address, title, start_time, end_time } = formData;

    const event: EventType = {
      id: selectedEvent?.id ?? Date.now(),
      title,
      start_time: new Date(start_time).toISOString(),
      end_time: new Date(end_time).toISOString(),
      address,
      status: selectedEvent?.status ?? "pending",
    };
    if (isEditMode) {
      return onEventUpdated(event);
    }
    onEventAdded(event);
  };

  const handleRemove = () => {
    onEventDeleted(selectedEvent?.id);
  };
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        defaultValues={{
          [FORM_FIELDS.TITLE]: selectedEvent?.title,
          [FORM_FIELDS.START_TIME]:
            selectedEvent?.start_time && parseISO(selectedEvent?.start_time),
          [FORM_FIELDS.END_TIME]:
            selectedEvent?.end_time && parseISO(selectedEvent?.end_time),
          [FORM_FIELDS.ADDRESS]: selectedEvent?.address,
        }}
      >
        <FormTextInput
          label="Title"
          name={FORM_FIELDS.TITLE}
          style={inlineStyles.inputField}
        />

        <DatePicker
          label="Start Date"
          name={FORM_FIELDS.START_TIME}
          style={inlineStyles.inputField}
        />

        <DatePicker
          label="End Date"
          name={FORM_FIELDS.END_TIME}
          style={inlineStyles.inputField}
        />

        <FormTextInput
          label="Address"
          name={FORM_FIELDS.ADDRESS}
          style={inlineStyles.inputField}
        />

        <ButtonsContainer>
          <Button
            type="button"
            theme="secondary"
            onClick={handleRemove}
            disabled={!isEditMode}
            style={{ ...inlineStyles.deleteButton, ...inlineStyles.button }}
          >
            Delete
          </Button>

          <Button type="submit" style={inlineStyles.button}>
            {isEditMode ? "Edit" : "Submit"}
          </Button>
        </ButtonsContainer>
      </Form>
    </>
  );
};

export { EventForm };
