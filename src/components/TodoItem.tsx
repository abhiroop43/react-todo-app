import {Button, Card, Heading, Icon, IconButton, Popover, Text} from "@astryxdesign/core";
import {Stack} from '@astryxdesign/core/Layout';
import {useState} from "react";

type TodoItemProps = {
    id: number;
    title: string;
    description: string;
}

const TodoItem = ({id, title, description}: TodoItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card key={id} elevation={'high'} width={'full'} className="my-5">
            <Stack direction="vertical" gap={1}>
                <Heading level={4}>{title}</Heading>
                <Text type="supporting" color="secondary">
                    {description}
                </Text>
                <Stack className={'w-full'} align={'end'} justify={'end'} direction={'horizontal'} gap={3}>
                    <Popover
                        placement="below"
                        label="Confirm deletion"
                        width={300}
                        isOpen={isOpen}
                        onOpenChange={setIsOpen}
                        content={
                            <Stack direction={'vertical'} gap={3}>
                                <Heading level={4}>Delete {'todo'}?</Heading>
                                <Text type="body">
                                    This will permanently delete the todo. This
                                    action cannot be undone.
                                </Text>
                                <Stack direction={'horizontal'} gap={2} hAlign="end">
                                    <Button
                                        label="Delete"
                                        variant="destructive"
                                        onClick={() => setIsOpen(false)}>
                                        Delete
                                    </Button>
                                    <Button
                                        label="Cancel"
                                        variant="ghost"
                                        onClick={() => setIsOpen(false)}>
                                        Cancel
                                    </Button>
                                </Stack>
                            </Stack>
                        }>
                        <IconButton
                            label="Delete"
                            icon={<Icon icon="error" color="inherit"/>}
                            variant="destructive"
                        />
                    </Popover>
                </Stack>

            </Stack>
        </Card>
    )
}
export default TodoItem
