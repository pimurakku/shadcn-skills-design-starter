"use client"

import type { Meta, StoryObj } from "@storybook/react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Modal overlay panel — p-6, rounded-lg, shadow-lg. Two Figma variants: form-style (Edit Profile) and share-link (Custom_close_button). Source: [Figma node 74:7828](https://www.figma.com/design/umeswexdAUadWQjZFimTZg/-shadcn_ui-components---Workshop?node-id=74-7828).",
      },
    },
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

/* ------------------------------------------------------------------ */
/*  Form dialog (Edit Profile pattern)                                  */
/* ------------------------------------------------------------------ */

export const FormDialog: Story = {
  name: "Form Dialog — Edit Profile",
  parameters: {
    docs: {
      description: {
        story: "Matches Figma 'Dialog' variant — header + form fields + Cancel / Save footer.",
      },
    },
  },
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Edit Profile</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Update your display name and email. Click save when done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="dialog-name">Name</Label>
            <Input id="dialog-name" defaultValue="Jane Smith" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dialog-email">Email</Label>
            <Input id="dialog-email" type="email" defaultValue="jane@example.com" />
          </div>
        </div>

        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancel</Button>} />
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

/* ------------------------------------------------------------------ */
/*  Share link (Custom_close_button pattern)                            */
/* ------------------------------------------------------------------ */

export const ShareLink: Story = {
  name: "Share Link — Copy pattern",
  parameters: {
    docs: {
      description: {
        story: "Matches Figma 'Custom_close_button' variant — header + readonly input + action button.",
      },
    },
  },
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="default">Share</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone with this link can view this document.
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-2">
          <Input
            defaultValue="https://example.com/share/abc123"
            readOnly
            className="flex-1"
          />
          <Button variant="outline">Copy</Button>
        </div>
      </DialogContent>
    </Dialog>
  ),
}

/* ------------------------------------------------------------------ */
/*  No close button                                                     */
/* ------------------------------------------------------------------ */

export const NoCloseButton: Story = {
  name: "No Close Button",
  parameters: {
    docs: {
      description: {
        story: "showCloseButton={false} — Escape key and backdrop click still dismiss. Use when close is handled by footer actions.",
      },
    },
  },
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Open</Button>} />
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Confirm action</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Are you sure you want to proceed?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancel</Button>} />
          <Button variant="destructive">Delete account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

/* ------------------------------------------------------------------ */
/*  Destructive confirm                                                 */
/* ------------------------------------------------------------------ */

export const DestructiveConfirm: Story = {
  name: "Destructive Confirm",
  parameters: {
    docs: {
      description: {
        story: "Confirm button restates the action ('Delete account', not 'OK') per WCAG 3.3.4.",
      },
    },
  },
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="destructive">Delete account</Button>} />
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Delete account</DialogTitle>
          <DialogDescription>
            Your account and all data will be permanently removed. This cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Keep account</Button>} />
          <Button variant="destructive">Yes, delete account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
